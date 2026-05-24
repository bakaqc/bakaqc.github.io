import { useEffect, useState } from "react";
import "./Header.scss";
import avatar from "../../assets/info/avt.jpg";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Home", icon: "uil-estate" },
  { href: "#about", label: "About", icon: "uil-user" },
  { href: "#experience", label: "Experience", icon: "uil-briefcase-alt" },
  { href: "#skills", label: "Skills", icon: "uil-brackets-curly" },
  { href: "#qualification", label: "Education", icon: "uil-graduation-cap" },
  { href: "#contact", label: "Contact", icon: "uil-message" },
];

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (href: string) => {
    setActiveLink(href);
    showMenu(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveLink("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={() => handleClick("#home")}>
          <span className="nav__logo-mark">
            <img src={avatar} alt="Quoc Chuong" />
          </span>
          <span className="nav__logo-text">bakaqc</span>
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li className="nav__item" key={item.href}>
                <a
                  href={item.href}
                  className={`nav__link ${activeLink === item.href ? "active-link" : ""}`}
                  onClick={() => handleClick(item.href)}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(false)}
          ></i>
        </div>

        <div className="nav__cta">
          <a href="#contact" className="nav__cta-btn" onClick={() => handleClick("#contact")}>
            Get in touch
            <i className="uil uil-arrow-up-right"></i>
          </a>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
