import projectsData from "../../../data/projects.json";

const Info = () => {
  const projectCount = projectsData.ProjectsData.length;

  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i className="bx bx-award about__icon"></i>
          <h3 className="about_title">Experience</h3>
          <span className="about__subtitle">1+ Years</span>
        </div>

        <div className="about__box">
          <i className="bx bx-briefcase-alt about__icon"></i>
          <h3 className="about_title">Completed</h3>
          <span className="about__subtitle">
            {projectCount} Project{projectCount > 1 ? "s" : ""}
          </span>
        </div>

        <div className="about__box">
          <i className="bx bx-support about__icon"></i>
          <h3 className="about_title">Support</h3>
          <span className="about__subtitle">24/7</span>
        </div>
      </div>
    </>
  );
};

export default Info;
