const Tools = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Orther</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxl-git"></i>

              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-github"></i>

              <div>
                <h3 className="skills__name">Github</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxl-docker"></i>

              <div>
                <h3 className="skills__name">Docker</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-visual-studio"></i>

              <div>
                <h3 className="skills__name">VSCode</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
