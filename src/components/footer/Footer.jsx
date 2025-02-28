import React from 'react';
import "./footer.css";
import {FiTwitter, FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">CodeCraftman2</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/ramramsa.sa/?hl=en" className="home__social-icon" target="_blank">
                    <FiInstagram />
                </a>
                <a href="https://github.com/CodeCraftman2" className="home__social-icon" target="_blank">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/yagya-saini-05739a267/" className="home__social-icon" target="_blank">
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;