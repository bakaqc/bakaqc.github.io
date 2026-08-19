import "./Experience.scss";
import experienceData from "../../../data/experience.json";
import SectionHeader from "../common/SectionHeader";
import { useReveal } from "../../hooks/useReveal";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  current?: boolean;
  primary?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

const ExperienceCard = ({
  item,
  index,
  last,
}: {
  item: ExperienceItem;
  index: number;
  last: boolean;
}) => {
  const { ref, visible } = useReveal<HTMLElement>();
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={ref}
      className={`experience__card reveal ${visible ? "reveal--in" : ""}`}
    >
      <div className="experience__rail">
        <span
          className={`experience__dot ${item.current ? "experience__dot--live" : ""}`}
          aria-hidden
        />
        {!last && <span className="experience__line" aria-hidden />}
      </div>

      <div
        className={`experience__content ${
          item.current ? "experience__content--current" : ""
        }`}
      >
        <div className="experience__num">
          service {num}
          {item.primary && <span className="experience__badge">current focus</span>}
        </div>

        <header className="experience__head">
          <div className="experience__heading">
            <h3 className="experience__role">{item.role}</h3>
            <div className="experience__company">
              <span className="experience__org">{item.company}</span>
              <span className="experience__sep">·</span>
              <span className="experience__type">{item.type}</span>
              <span className="experience__sep">·</span>
              <span className="experience__type">{item.location}</span>
            </div>
          </div>
          <span
            className={`experience__period ${item.current ? "experience__period--live" : ""}`}
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
          <span className="experience__stack-label">deps</span>
          {item.stack.map((tech) => (
            <span className="experience__tech" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Experience = () => {
  const experience = experienceData.experience as ExperienceItem[];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <SectionHeader
          index="02"
          path="experience"
          title="Deployed services."
          subtitle="What I've shipped — newest first."
        />

        <div className="experience__timeline">
          {experience.map((item, idx) => (
            <ExperienceCard
              key={item.id}
              item={item}
              index={idx}
              last={idx === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
