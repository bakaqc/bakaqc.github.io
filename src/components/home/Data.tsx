import React from "react";
import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Quoc Chuong <img src={hand} className="home__hand" alt="Hand" />
      </h1>
      <h3 className="home__subtitle">Backend Developer</h3>
      <p className="home__description">
        🎓 I'm a student at FPT University Quy Nhơn.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello <img src={send} alt="Send" />
      </a>
    </div>
  );
};

export default Data;
