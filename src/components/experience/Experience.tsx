import "./Experience.scss";
import experienceData from "../../../data/experience.json";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

const Experience = () => {
  const experience = experienceData.experience as ExperienceItem[];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <span className="section__eyebrow">Experience</span>
        <h2 className="section__title">Career timeline.</h2>
        <p className="section__subtitle">
          Roles, responsibilities, and the systems I shipped along the way.
        </p>

        <div className="experience__timeline">
          {experience.map((item, idx) => (
            <article className="experience__card" key={item.id}>
              <div className="experience__rail">
                <span
                  className={`experience__dot ${
                    item.current ? "experience__dot--live" : ""
                  }`}
                  aria-hidden
                />
                {idx !== experience.length - 1 && (
                  <span className="experience__line" aria-hidden />
                )}
              </div>

              <div className="experience__content">
                <header className="experience__head">
                  <div className="experience__heading">
                    <h3 className="experience__role">{item.role}</h3>
                    <div className="experience__company">
                      <span>{item.company}</span>
                      <span className="experience__sep">·</span>
                      <span className="experience__type">{item.type}</span>
                      <span className="experience__sep">·</span>
                      <span className="experience__type">{item.location}</span>
                    </div>
                  </div>
                  <span
                    className={`experience__period ${
                      item.current ? "experience__period--live" : ""
                    }`}
                  >
                    {item.current && <span className="experience__live-dot" />}
                    {item.period}
                  </span>
                </header>

                <p className="experience__summary">{item.summary}</p>

                <ul className="experience__highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="experience__stack">
                  {item.stack.map((tech) => (
                    <span className="experience__tech" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
