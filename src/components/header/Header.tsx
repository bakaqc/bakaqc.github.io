import { useEffect, useState } from "react";
import "./Header.scss";
import avatar from "../../assets/info/avt.jpg";

interface NavItem {
  href: string;
  label: string;
  path: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Home", path: "~/home", icon: "uil-estate" },
  { href: "#about", label: "About", path: "~/about", icon: "uil-user" },
  { href: "#experience", label: "Experience", path: "~/experience", icon: "uil-briefcase-alt" },
  { href: "#skills", label: "Skills", path: "~/skills", icon: "uil-brackets-curly" },
  { href: "#qualification", label: "Education", path: "~/education", icon: "uil-graduation-cap" },
  { href: "#contact", label: "Contact", path: "~/contact", icon: "uil-message" },
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
            <span className="nav__logo-dot" aria-hidden="true" />
          </span>
          <span className="nav__logo-text">
            bakaqc<span className="nav__logo-caret">_</span>
          </span>
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
                  <span className="nav__path">{item.path}</span>
                  <span className="nav__label">{item.label}</span>
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
            <span className="nav__cta-prompt">$</span> get in touch
          </a>
        </div>

        <div
          className="nav__toggle"
          onClick={() => showMenu(!toggle)}
          role="button"
          tabIndex={0}
          aria-label="Open menu"
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && showMenu(!toggle)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
