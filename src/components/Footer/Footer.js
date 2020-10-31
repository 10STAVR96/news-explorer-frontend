import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import github from '../../images/icon/github.svg';
import facebook from '../../images/icon/fb.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__list footer__list_links">
          <li>
            <NavLink className="footer__link" to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink className="footer__link" to="https://praktikum.yandex.ru/" target="_blank">Яндекс.Практикум</NavLink>
          </li>
        </ul>
        <ul className="footer__list footer__list_social">
          <li>
            <NavLink className="footer__link" to="https://github.com/10STAVR96" target="_blank">
              <img className="footer__icons" src={github} alt="github" />
            </NavLink>
          </li>
          <li>
            <NavLink className="footer__link" to="https://www.facebook.com/profile.php?id=100010074348903" target="_blank">
              <img className="footer__icons" src={facebook} alt="facebook" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;