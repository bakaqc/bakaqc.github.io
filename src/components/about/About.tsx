import CV from "../../assets/info/DinhQuocChuong_FullStackDeveloper_CV.pdf";
import baka from "../../assets/info/baka.jpg";
import experienceData from "../../../data/experience.json";
import SectionHeader from "../common/SectionHeader";
import { useReveal } from "../../hooks/useReveal";
import "./About.scss";

const SPECS: { k: string; v: string }[] = [
  { k: "role", v: "Tech Officer @ WeCare Group" },
  { k: "base", v: "Quy Nhon, Vietnam" },
  { k: "focus", v: "React · Node.js · Azure · Integrations" },
  { k: "status", v: "open to collaborate" },
];

const About = () => {
  const experiences = experienceData.experience;
  const experienceCount = experiences.length;
  const currentCount = experiences.filter((item) => item.current).length;
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeader
          index="01"
          path="about"
          title={
            <>
              Full stack engineer who ships <em>boringly reliable</em> systems.
            </>
          }
        />

        <div ref={ref} className={`about__grid reveal ${visible ? "reveal--in" : ""}`}>
          <div className="about__bio card">
            <div className="card__bar">
              <span className="card__dots">
                <i /><i /><i />
              </span>
              <span className="card__name">~/about · cat profile.md</span>
            </div>

            <div className="about__bio-body">
              <p>
                <strong>Quoc Chuong</strong> — Full Stack Developer, FPT
                University AI Campus grad (2025). Now <strong>Tech Officer @
                WeCare Group</strong>, building the React apps a finance team
                works in and the services behind them.
              </p>
              <p>
                I build systems that survive Monday morning — clean data
                contracts, predictable queues, traceable retries. Daily stack:{" "}
                <strong>React, Node.js, Azure Functions</strong>.
              </p>

              <dl className="about__spec">
                {SPECS.map((s) => (
                  <div className="about__spec-row" key={s.k}>
                    <dt>{s.k}</dt>
                    <dd>{s.v}</dd>
                  </div>
                ))}
              </dl>

              <a
                download="DinhQuocChuong_FullStackDeveloper_CV.pdf"
                href={CV}
                className="about__cv"
              >
                <i className="uil uil-file-download-alt"></i>
                download CV
              </a>
            </div>
          </div>

          <aside className="about__side">
            <div className="about__portrait">
              <span className="about__tick about__tick--tl" />
              <span className="about__tick about__tick--tr" />
              <span className="about__tick about__tick--bl" />
              <span className="about__tick about__tick--br" />
              <img src={baka} alt="Quoc Chuong" loading="lazy" />
              <span className="about__portrait-tag">
                <i className="uil uil-map-marker"></i> Quy Nhon, VN
              </span>
            </div>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">{experienceCount}</span>
                <span className="about__stat-label">roles shipped</span>
              </div>
              <div className="about__stat about__stat--accent">
                <span className="about__stat-num">{currentCount}</span>
                <span className="about__stat-label">active now</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">2025</span>
                <span className="about__stat-label">BSE grad</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
