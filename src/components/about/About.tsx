import CV from "../../assets/info/Quoc_Chuong_Backend_Developer_CV.pdf";
import experienceData from "../../../data/experience.json";
import "./About.scss";

const About = () => {
  const experiences = experienceData.experience;
  const experienceCount = experiences.length;
  const currentCount = experiences.filter((item) => item.current).length;

  return (
    <section className="about section" id="about">
      <div className="container">
        <span className="section__eyebrow">About</span>
        <h2 className="section__title about__title">
          Backend-leaning engineer who ships <em>boringly reliable</em> systems.
        </h2>

        <div className="about__grid">
          <div className="about__bio">
            <p>
              I'm <strong>Quoc Chuong</strong> — a Software Engineer based in
              Quy Nhon, Vietnam. I just graduated from{" "}
              <strong>FPT University · Quy Nhon AI Campus (Nov 2025)</strong>{" "}
              and now serve as <strong>Tech Officer at WeCare Group</strong>,
              owning internal accounting &amp; supply-chain automation across
              the Microsoft Power Platform + Azure stack.
            </p>
            <p>
              I care about systems that survive Monday morning — clean data
              contracts, predictable queues, traceable retries, and dashboards
              that don't lie. Backend Node.js, Azure Functions, and Microsoft
              Dataverse are my daily playground.
            </p>

            <a download="" href={CV} className="about__cv">
              <i className="uil uil-file-download-alt"></i>
              Download CV
            </a>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-num">{experienceCount}</span>
              <span className="about__stat-label">
                Professional<br />roles
              </span>
            </div>
            <div className="about__stat about__stat--accent">
              <span className="about__stat-num">{currentCount}</span>
              <span className="about__stat-label">
                Currently<br />active
              </span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">2025</span>
              <span className="about__stat-label">
                BSE<br />graduated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
