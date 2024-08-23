import { useState } from "react";
import "./Qualification.scss";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__section">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Student</h3>
                  <span className="qualification__subtitle">
                    FPT Quy Nhon AI Campus
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Secondary School Student
                  </h3>
                  <span className="qualification__subtitle">
                    An Nhon No. 1 High School
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2021
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Junior High School Student
                  </h3>
                  <span className="qualification__subtitle">
                    Nhon Phuc Secondary School
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2014 - 2018
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Intern Tester</h3>
                  <span className="qualification__subtitle">
                    FPT SOFTWARE QUY NHON
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> April 2024 -
                    August 2024
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Student Experience</h3>
                  <span className="qualification__subtitle">
                    FPT SOFTWARE QUY NHON
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> May - December 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
