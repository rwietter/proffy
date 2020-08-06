import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsClassesController {
  // eslint-disable-next-line class-methods-use-this
  async index(req: Request, res: Response) {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return res.json({
      total,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async create(req: Request, res: Response) {
    try {
      const { user_id } = req.body;
      await db('connections').insert({
        user_id,
      });
      return res.status(201).send();
    } catch (e) {
      console.log('aqui', e.message);
    }
  }
}
