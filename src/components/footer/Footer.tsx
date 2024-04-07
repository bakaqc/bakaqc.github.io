import "./Footer.scss";
import Github from "../../assets/images/social/github.jpg";
import Facebook from "../../assets/images/social/facebook.jpg";
import Linkedin from "../../assets/images/social/linkedin.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Quoc Chuong</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#qualification" className="footer__link">
                Qualification
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://github.com/bakaqc"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Github}
                alt="Github"
                style={{ width: "60px", height: "60px" }}
              />
            </a>

            <a
              href="https://www.facebook.com/dqchuongbk"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt="Facebook"
                style={{ width: "60px", height: "60px" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/bakaqc"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Linkedin}
                alt="Linkedin"
                style={{ width: "60px", height: "60px" }}
              />
            </a>
          </div>

          <span className="footer__copy">
            &#169; Quoc Chuong. All rigths reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
