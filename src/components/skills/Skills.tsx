import "./Skills.scss";
import skillsData from "../../../data/skills.json";
import SectionHeader from "../common/SectionHeader";
import { useReveal } from "../../hooks/useReveal";

interface SkillGroup {
  id: string;
  label: string;
  caption: string;
  icons: string;
  pills: string[];
}

const SkillCard = ({ group, primary }: { group: SkillGroup; primary?: boolean }) => {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`skill__card reveal ${visible ? "reveal--in" : ""} ${
        primary ? "skill__card--primary" : ""
      }`}
    >
      <header className="skill__head">
        <h3 className="skill__label">{group.label}</h3>
        <p className="skill__caption">{group.caption}</p>
      </header>

      <img
        src={`https://skillicons.dev/icons?i=${group.icons}`}
        alt={group.label}
        className="skill__icons"
        loading="lazy"
      />

      <div className="skill__pills">
        {group.pills.map((pill) => (
          <span key={pill} className="skill__pill">
            {pill}
          </span>
        ))}
      </div>
    </article>
  );
};

const Skills = () => {
  const primary = skillsData.primary as SkillGroup[];
  const groups = skillsData.groups as SkillGroup[];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionHeader
          index="03"
          path="skills"
          title="Stack map."
          subtitle="The stack I reach for — grouped by where it lives in my day."
        />

        <div className="skill__grid skill__grid--primary">
          {primary.map((group) => (
            <SkillCard key={group.id} group={group} primary />
          ))}
        </div>

        <div className="skill__grid">
          {groups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
