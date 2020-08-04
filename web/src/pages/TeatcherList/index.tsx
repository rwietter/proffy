import React from 'react';
import Header from '../../components/header';
import TeacherList from '../../components/teacherItem';

import './style.css';
function Teacher() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="week-day">Matérias</label>
            <input type="text" name="week-day" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="subject">Dia da semana</label>
            <input type="text" name="subject" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" name="time" id="time" />
          </div>
        </form>
      </Header>
      <main>
        <TeacherList />
      </main>
    </div>
  );
}

export default Teacher;
