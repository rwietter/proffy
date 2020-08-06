import { Response, Request } from 'express';
import db from '../database/connection';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';

interface Schedule {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  // eslint-disable-next-line class-methods-use-this
  async index(req: Request, res: Response) {
    const filters = req.query;
    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if (!week_day || !subject || !time) {
      return res.status(400).json({
        error: 'Missing filters to search classes',
      });
    }

    const timeInMinutes = convertHoursToMinutes(time);

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [+week_day])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject as string)
      .join('users', 'classes.user_id', '=', 'user_id')
      .select(['classes.*', 'users.*']);

    res.status(201).json(classes);
  }

  // eslint-disable-next-line class-methods-use-this
  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const trx = await db.transaction();

    try {
      const insertedUsersId = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUsersId[0];
      const insertedClassesId = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesId[0];
      const classSchedule = schedule.map(
        (item: Schedule) => ({
          class_id,
          week_day: item.week_day,
          from: convertHoursToMinutes(item.from),
          to: convertHoursToMinutes(item.to),
        }),
        [],
      );
      await trx('class_schedule').insert(classSchedule);

      await trx.commit();
      return res.status(201).send();
    } catch (error) {
      await trx.rollback();
      return res.send(400).json({
        error: 'Unexpected error while creating new class',
      });
    }
  }
}
