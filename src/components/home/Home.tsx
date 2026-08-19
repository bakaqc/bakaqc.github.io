import "./Home.scss";
import FlowLine from "./FlowLine";
import { SOCIALS } from "../../data/socials";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__masthead">
          <span className="home__byline">Quoc Chuong — Software Engineer</span>
          <span className="home__locale">Quy Nhon, VN · UTC+7</span>
        </div>

        <h1 className="home__title">
          I build <span className="home__title-mark">reliable backends</span>{" "}
          for messy <em className="home__title-em">real-world</em> operations.
        </h1>

        <p className="home__description">
          Accounting &amp; supply-chain automation at{" "}
          <strong>WeCare Group</strong> — the kind that has to reconcile to the
          last dong, every morning.
        </p>

        <FlowLine />

        <div className="home__actions">
          <div className="home__cta">
            <a href="#experience" className="home__btn home__btn--primary">
              ./view-work
              <i className="uil uil-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#contact" className="home__btn home__btn--ghost">
              ./say-hello
            </a>
          </div>

          <ul className="home__socials">
            {[SOCIALS.github, SOCIALS.linkedin].map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  <i className={`uil ${s.icon}`} aria-hidden="true"></i>
                  <span>{s.label}</span>
                  <span className="home__social-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="home__availability">
          <span className="home__availability-dot" aria-hidden="true" />
          Available for backend &amp; platform work
        </p>
      </div>
    </section>
  );
};

export default Home;
