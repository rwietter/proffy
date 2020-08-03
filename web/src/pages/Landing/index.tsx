import React, { FC } from 'react';
import Logo from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './style.css';
export const Landing: FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="logotipo do proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img src={LandingImg} alt="plataforma de estudos" className="hero-image" />
        <div className="buttons-container">
          <a href="#" className="study">
            <img src={study} alt="estudar" />
            Estudar
          </a>
          <a href="#" className="give-classes">
            <img src={giveClasses} alt="Dar aulas" />
            Dar aulas
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeart} alt="coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
