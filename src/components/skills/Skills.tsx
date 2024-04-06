import React, { Suspense } from "react";
import "./Skills.scss";
import Loading from "../common/Loading";

const Frontend = React.lazy(() => import("./Frontend"));
const Backend = React.lazy(() => import("./Backend"));
const Tools = React.lazy(() => import("./Tools"));
const Skills = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My Technical Level</span>

          <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Tools />
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Skills;
