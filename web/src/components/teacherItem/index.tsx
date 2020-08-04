import React from 'react';
import whatsappImg from '../../assets/images/icons/whatsapp.svg';
import './style.css';
const TeacherList = () => {
  return (
    <article className="teacher-item">
      <div className="teacher-item__name">
        <img
          src="https://avatars1.githubusercontent.com/u/46854467?s=400&u=c88239f08e319bdec81b7c517a634ed8a10830c2&v=4"
          alt="person"
        />
        <div className="data">
          <strong>Alberto</strong>
          <span>Computer Science</span>
        </div>
      </div>

      <div className="teacher-item__description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui be</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quam nemo ratione blanditiis minima voluptatum
          natus molliti
        </p>
      </div>

      <footer>
        <p>
          Preço/Hora<strong>R$ 90</strong>
        </p>
        <button className="button" type="button">
          <img src={whatsappImg} alt="entrar em contato por Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherList;
