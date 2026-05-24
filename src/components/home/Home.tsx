import "./Home.scss";
import baka from "../../assets/info/baka.jpg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__intro">
          <span className="home__eyebrow">
            <span className="home__eyebrow-dot" />
            Available · Tech Officer @ WeCare Group
          </span>

          <h1 className="home__title">
            Hi, I'm <span className="home__title-mark">Quoc Chuong</span>.<br />
            I build <em className="home__title-em">reliable backends</em> for
            messy <em className="home__title-em">real-world</em> operations.
          </h1>

          <p className="home__description">
            Software Engineer based in Quy Nhon, Vietnam. I architect
            accounting &amp; supply-chain automation on the Microsoft Power
            Platform and Azure — turning chaotic finance workflows into
            predictable, testable systems.
          </p>

          <div className="home__cta">
            <a href="#experience" className="home__btn home__btn--primary">
              View my work
              <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#contact" className="home__btn home__btn--ghost">
              Say hello
              <i className="uil uil-message"></i>
            </a>
          </div>

          <ul className="home__socials">
            <li>
              <a
                href="https://github.com/bakaqc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="uil uil-github-alt"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bakaqc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="uil uil-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/bakaqc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="uil uil-facebook-f"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:bakaqc.dev@gmail.com"
                aria-label="Email"
              >
                <i className="uil uil-envelope"></i>
                <span>bakaqc.dev@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <aside className="home__visual">
          <div className="home__avatar">
            <img src={baka} alt="Quoc Chuong" />
            <span className="home__avatar-tag">
              <i className="uil uil-map-marker"></i> Quy Nhon, VN
            </span>
          </div>
        </aside>
      </div>

      <a href="#about" className="home__scroll">
        <span>Scroll</span>
        <i className="uil uil-arrow-down"></i>
      </a>
    </section>
  );
};

export default Home;
