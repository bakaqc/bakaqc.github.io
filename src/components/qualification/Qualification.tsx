import { useState } from "react";
import "./Qualification.scss";
import qualificationData from "../../../data/qualification.json";

interface QualificationItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  position: "left" | "right";
}

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const renderQualificationData = (data: QualificationItem[]) => {
    // Đảo ngược mảng để hiển thị thời gian gần nhất trước
    const reversedData = [...data].reverse();

    return reversedData.map((item, index) => {
      // Xác định position dựa trên index để tạo layout xen kẽ
      const isLeft = index % 2 === 0;

      return (
        <div key={item.id} className="qualification__data">
          {isLeft ? (
            <div>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> {item.period}
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <span className="qualification__rounder"></span>
            {index !== reversedData.length - 1 && (
              <span className="qualification__line"></span>
            )}
          </div>

          {!isLeft ? (
            <div>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> {item.period}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      );
    });
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
              {renderQualificationData(
                qualificationData.education as QualificationItem[]
              )}
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {renderQualificationData(
                qualificationData.experience as QualificationItem[]
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
