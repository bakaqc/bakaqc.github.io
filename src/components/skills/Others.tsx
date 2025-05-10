import { useEffect, useState } from "react";
import skillsData from "../../../data/skills.json";

type Skill = {
  icon: string;
  name: string;
  level: string;
};

type SkillGroup = {
  group: Skill[];
};

const Tools = () => {
  const [skills, setSkills] = useState<SkillGroup[]>([]);

  useEffect(() => {
    setSkills(skillsData.others);
  }, []);

  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Orther</h3>

        <div className="skills__box">
          {skills.map((group, groupIndex) => (
            <div className="skills__group" key={groupIndex}>
              {group.group.map((skill, skillIndex) => (
                <div className="skills__data" key={skillIndex}>
                  <i className={skill.icon}></i>

                  <div>
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tools;
