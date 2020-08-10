import React from 'react';
import { Link } from 'react-router-dom';

import back from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';
import './style.css';

interface HeaderProps {
  title: string;
  description?: string;
}
const Header: React.FC<HeaderProps> = ({ title, description, children }) => (
  <header className="page-header">
    <div className="top-bar-container">
      <Link to="/">
        <img src={back} alt="voltar a pagina inicial" />
      </Link>
      <img src={logo} alt="proffy" />
    </div>
    <div className="header-content">
      <strong>{title}</strong>
      {description && <p>{description}</p>}
    </div>
    {children}
  </header>
);
export default Header;
