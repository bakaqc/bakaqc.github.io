import React, { useEffect, useRef } from "react";

interface ProjectItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    github: string;
    description: string;
    role: string;
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const description = descriptionRef.current;
      const lineHeight = parseInt(
        window.getComputedStyle(description).getPropertyValue("line-height")
      );
      const height = description.clientHeight;
      const lines = Math.floor(height / lineHeight);

      if (lines > 2) {
        description.classList.add("clamped");
      }
    }
  }, []);

  return (
    <>
      <div className="project__card" key={item.id}>
        <img src={item.image} alt={item.title} className="project__img" />
        <h3 className="project__title">{item.title}</h3>
        <p ref={descriptionRef} className="project__description">
          {item.description}
        </p>
        <p className="project__role">
          Role:
          <span className="project__role-title">{' '}{item.role}</span>
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
