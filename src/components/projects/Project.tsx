import React, { Suspense, useEffect } from "react";
import { ProjectsData } from "./Data";
import { ProjectsNav } from "./Data";
import Loading from "../common/Loading";

const ProjectItem = React.lazy(() => import("./ProjectItem"));

const Project = () => {
  const [item, setItem] = React.useState({ name: "All" });
  const [projects, setProjects] = React.useState<
    {
      id: number;
      image: string;
      title: string;
      category: string;
      github: string;
    }[]
  >([]);
  const [active, setActive] = React.useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(ProjectsData);
    } else {
      const NewProjects = ProjectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(NewProjects);
    }
  }, [item]);

  const handleClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
    const target = e.target as HTMLElement;
    setItem({ name: target.textContent || "" });
    setActive(index);
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="project__filters">
          {ProjectsNav.map((item, index) => {
            return (
              <>
                <span
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                  className={`${
                    active === index ? "active-project" : ""
                  } project__item`}
                  key={index}
                >
                  {item.name}
                </span>
              </>
            );
          })}
        </div>

        <div className="project__container container grid">
          {projects
            .sort((a, b) => b.id - a.id)
            .map((item) => {
              return <ProjectItem key={item.id} item={item} />;
            })}
        </div>
      </Suspense>
    </>
  );
};

export default Project;
