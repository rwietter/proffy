import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import back from '../../assets/images/icons/back.svg';
import './style.css';
interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={back} alt="voltar a pagina inicial" />
        </Link>
        <img src={logo} alt="proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
      </div>
      {children}
    </header>
  );
};
export default Header;
