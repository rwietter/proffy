import React from 'react';

import whatsappImg from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import './style.css';

export interface ITeacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}
interface TeacherItemProps {
  teachers: ITeacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  teachers,
}: TeacherItemProps) => {
  const createNewConnection = () => {
    api.post('connections', {
      user_id: teachers.id,
    });
  };

  return (
    <article className="teacher-item">
      <div className="teacher-item__name">
        <img src={teachers.avatar} alt={teachers.avatar} />
        <div className="data">
          <strong>{teachers.name}</strong>
          <span>{teachers.subject}</span>
        </div>
      </div>

      <div className="teacher-item__description">
        <p>{teachers.bio}</p>
      </div>

      <footer>
        <p>
          Preço/Hora
          <strong>
            R$
            {teachers.cost}
          </strong>
        </p>
        <a
          onClick={createNewConnection}
          className="button"
          href={`https://wa.me/${teachers.whatsapp}`}>
          <img src={whatsappImg} alt="entrar em contato por Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
