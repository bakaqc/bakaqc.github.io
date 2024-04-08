import React, { Suspense } from "react";
import "./Projects.scss";
import Loading from "../common/Loading";

const Project = React.lazy(() => import("./Project"));

const Projects = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="projects section" id="projects">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">Most Recent Projects</span>

          <Project />
        </section>
      </Suspense>
    </>
  );
};

export default Projects;
