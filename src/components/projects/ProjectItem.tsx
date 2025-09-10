import React, { useEffect, useRef, useState } from "react";

interface ProjectItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    github: string;
    description: string;
    role: string;
    teamSize: number;
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [isTextClamped, setIsTextClamped] = useState(false);

  useEffect(() => {
    const checkTextClamping = () => {
      if (descriptionRef.current) {
        const element = descriptionRef.current;
        // Check if text is actually truncated by comparing scroll height with client height
        const isClamped = element.scrollHeight > element.clientHeight;
        setIsTextClamped(isClamped);

        if (isClamped) {
          element.classList.add("clamped");
        }
      }
    };

    // Check after component mounts and fonts are loaded
    checkTextClamping();

    // Also check after fonts are loaded (in case they affect the layout)
    document.fonts.ready.then(() => {
      checkTextClamping();
    });
  }, [item.description]);

  return (
    <>
      <div className="project__card" key={item.id}>
        <img src={item.image} alt={item.title} className="project__img" />
        <h3 className="project__title">{item.title}</h3>
        <div className="project__description-container">
          <p ref={descriptionRef} className="project__description">
            {item.description}
          </p>
          {isTextClamped && (
            <div className="project__tooltip">{item.description}</div>
          )}
        </div>
        <p className="project__team">
          Team Size:
          <span className="project__team-size"> {item.teamSize}</span>
        </p>
        <p className="project__role">
          Role:
          <span className="project__role-title"> {item.role}</span>
        </p>

        <a href={item.github} className="project__button" target="_blank">
          View Detail{" "}
          <i className="bx bx-right-arrow-alt project__button-icon"></i>
        </a>
      </div>
    </>
  );
};

export default ProjectItem;
