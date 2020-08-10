import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import study from '../../assets/images/icons/study.svg';
import LandingImg from '../../assets/images/landing.svg';
import Logo from '../../assets/images/logo.svg';
import api from '../../services/api';

import './style.css';

export const Landing: FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(({ data }) => setTotalConnections(data.total));
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img loading="lazy" src={Logo} alt="logotipo do proffy" />
          <h2>Sua plataforma de estudos online. </h2>
        </div>
        <img
          src={LandingImg}
          alt="plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="study" className="study">
            <img src={study} alt="estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClasses} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de
          {totalConnections} conexões já realizadas
          <img loading="lazy" src={purpleHeart} alt="ícone do coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
