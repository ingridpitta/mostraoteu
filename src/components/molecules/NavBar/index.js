import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import "./navBar.styles.scss";

const NavBar = () => {
  return (
    <nav className="navBar--container">
      <Logo />
      <ul>
        <Link to="/">
          <li>Início</li>
        </Link>
        <Link to="/sobre">
          <li>Sobre</li>
        </Link>
        <Link to="/galeria">
          <li>Galeria</li>
        </Link>
        <Link to="/contato">
          <li>Contato</li>
        </Link>
        <Link to="/cadastro">
          <li>Cadastro</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
