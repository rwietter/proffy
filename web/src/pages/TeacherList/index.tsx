import React, { useState, FormEvent } from 'react';

import Header from '../../components/header';
import Input from '../../components/input';
import Select from '../../components/select';
import TeachersItems, { ITeacher } from '../../components/teacherItem';
import api from '../../services/api';

import './style.css';

const Teacher: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });
    if (!response) {
      return;
    }
    setTeachers(response.data);
  };

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form onSubmit={searchTeachers} id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              {
                value: 'Artes',
                label: 'Artes',
              },
              {
                value: 'Biologia',
                label: 'Biologia',
              },
              {
                value: 'Matemática',
                label: 'Matemática',
              },
              {
                value: 'Física',
                label: 'Física',
              },
              {
                value: 'Geografia',
                label: 'Geografia',
              },
              {
                value: 'História',
                label: 'História',
              },
              {
                value: 'Portugês',
                label: 'Portugês',
              },
              {
                value: 'Inglês',
                label: 'Inglês',
              },
              {
                value: 'Espanhol',
                label: 'Espanhol',
              },
              {
                value: 'Química',
                label: 'Química',
              },
            ]}
            value={subject}
            onChange={({ target }) => setSubject(target.value)}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              {
                value: '0',
                label: 'Domingo',
              },
              {
                value: '1',
                label: 'Segunda-feira',
              },
              {
                value: '2',
                label: 'Terça-feira',
              },
              {
                value: '3',
                label: 'Quarta-feira',
              },
              {
                value: '4',
                label: 'Quinta-feira',
              },
              {
                value: '5',
                label: 'Sexta-feira',
              },
              {
                value: '6',
                label: 'Sábado',
              },
            ]}
            value={weekDay}
            onChange={({ target }) => setWeekDay(target.value)}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={({ target }) => setTime(target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </Header>
      <main>
        {teachers.map((teacher: ITeacher) => (
          <TeachersItems key={teacher.id} teachers={teacher} />
        ))}
      </main>
    </div>
  );
};

export default Teacher;
