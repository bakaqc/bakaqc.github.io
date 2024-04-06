const Backend = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Backend</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxl-c-plus-plus"></i>

              <div>
                <h3 className="skills__name">C++</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-java"></i>

              <div>
                <h3 className="skills__name">Java</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-nodejs"></i>

              <div>
                <h3 className="skills__name">NodeJS</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-data"></i>

              <div>
                <h3 className="skills__name">SQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxs-data"></i>

              <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
            <i className='bx bxl-mongodb' ></i>

              <div>
                <h3 className="skills__name">Mongodb</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backend;
