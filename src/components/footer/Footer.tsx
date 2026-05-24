import "./Footer.scss";
import avatar from "../../assets/info/avt.jpg";

const FOOTER_NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#qualification", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const FOOTER_SOCIALS = [
  { href: "https://github.com/bakaqc", label: "GitHub", icon: "uil-github-alt" },
  { href: "https://www.linkedin.com/in/bakaqc", label: "LinkedIn", icon: "uil-linkedin" },
  { href: "https://www.facebook.com/dqchuongbk", label: "Facebook", icon: "uil-facebook-f" },
  { href: "https://discord.gg/uGEvmrqD", label: "Discord", icon: "uil-discord" },
  { href: "https://ko-fi.com/bakaqc", label: "Ko-fi", icon: "uil-heart-alt" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__main">
          <div className="footer__brand">
            <span className="footer__mark">
              <img src={avatar} alt="Quoc Chuong" />
            </span>
            <div>
              <h3 className="footer__title">Quoc Chuong</h3>
              <p className="footer__tagline">
                Backend-leaning Software Engineer · Tech Officer @ WeCare Group
              </p>
            </div>
          </div>

          <nav className="footer__nav">
            {FOOTER_NAV.map((item) => (
              <a key={item.href} href={item.href} className="footer__link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} Quoc Chuong (bakaqc) — built with React, Vite, and a lot
            of coffee.
          </span>
          <div className="footer__socials">
            {FOOTER_SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={s.label}
              >
                <i className={`uil ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
