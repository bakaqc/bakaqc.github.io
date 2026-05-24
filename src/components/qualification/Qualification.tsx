import "./Qualification.scss";
import qualificationData from "../../../data/qualification.json";

interface Achievement {
  label: string;
  value: string;
}

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  campus: string;
  period: string;
  location: string;
  status: string;
  tagline: string;
  focus: string[];
  achievements: Achievement[];
}

const Qualification = () => {
  const education = qualificationData.education as EducationItem[];

  return (
    <section className="qualification section" id="qualification">
      <div className="container">
        <span className="section__eyebrow">Education</span>
        <h2 className="section__title">Academic background.</h2>
        <p className="section__subtitle">
          Where the foundations were built — degree, focus areas, and the
          milestones I picked up along the way.
        </p>

        <div className="qualification__stack">
          {education.map((item) => (
            <article className="edu-card" key={item.id}>
              <div className="edu-card__ornament" aria-hidden>
                <span className="edu-card__corner edu-card__corner--tl" />
                <span className="edu-card__corner edu-card__corner--tr" />
                <span className="edu-card__corner edu-card__corner--bl" />
                <span className="edu-card__corner edu-card__corner--br" />
              </div>

              <div className="edu-card__inner">
                <aside className="edu-card__seal">
                  <div className="edu-card__seal-ring" aria-hidden>
                    <svg viewBox="0 0 120 120" className="edu-card__seal-svg">
                      <defs>
                        <path
                          id={`edu-circle-${item.id}`}
                          d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                        />
                      </defs>
                      <text className="edu-card__seal-text">
                        <textPath
                          href={`#edu-circle-${item.id}`}
                          startOffset="0"
                        >
                          · FPT UNIVERSITY · QUY NHON AI CAMPUS · CLASS OF 2025
                        </textPath>
                      </text>
                    </svg>
                    <div className="edu-card__seal-core">
                      <i className="uil uil-graduation-cap"></i>
                      <span>BSE</span>
                    </div>
                  </div>
                  <span className="edu-card__status">
                    <span className="edu-card__status-dot" />
                    {item.status}
                  </span>
                </aside>

                <div className="edu-card__body">
                  <header className="edu-card__head">
                    <span className="edu-card__kicker">Degree</span>
                    <h3 className="edu-card__degree">{item.degree}</h3>
                    <p className="edu-card__institution">
                      <strong>{item.institution}</strong>
                      <span className="edu-card__dot-sep">·</span>
                      <span>{item.campus}</span>
                    </p>
                    <p className="edu-card__tagline">{item.tagline}</p>
                  </header>

                  <div className="edu-card__meta">
                    <span className="edu-card__chip">
                      <i className="uil uil-calendar-alt"></i>
                      {item.period}
                    </span>
                    <span className="edu-card__chip">
                      <i className="uil uil-map-marker"></i>
                      {item.location}
                    </span>
                  </div>

                  <div className="edu-card__section">
                    <span className="edu-card__section-label">
                      Focus areas
                    </span>
                    <div className="edu-card__focus">
                      {item.focus.map((topic) => (
                        <span className="edu-card__focus-tag" key={topic}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="edu-card__section">
                    <span className="edu-card__section-label">
                      Milestones
                    </span>
                    <ul className="edu-card__milestones">
                      {item.achievements.map((a) => (
                        <li className="edu-card__milestone" key={a.label}>
                          <span className="edu-card__milestone-label">
                            {a.label}
                          </span>
                          <span className="edu-card__milestone-value">
                            {a.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
