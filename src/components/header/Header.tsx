import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [ActiveLink, setActiveLink] = useState("home");

  const handleClick = (e) => {
    setActiveLink(e.target.getAttribute("href"));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          Quoc Chuong
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  ActiveLink === "#home" ? "active-link" : ""
                }`}
                onClick={handleClick}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${
                  ActiveLink === "#about" ? "active-link" : ""
                }`}
                onClick={handleClick}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skill"
                className={`nav__link ${
                  ActiveLink === "#skill" ? "active-link" : ""
                }`}
                onClick={handleClick}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skill
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#service"
                className={`nav__link ${
                  ActiveLink === "#service" ? "active-link" : ""
                }`}
                onClick={handleClick}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Service
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                className={`nav__link ${
                  ActiveLink === "#portfolio" ? "active-link" : ""
                }`}
                onClick={handleClick}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${
                  ActiveLink === "#contact" ? "active-link" : ""
                }`}
                onClick={handleClick}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
