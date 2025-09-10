import hand from "../../assets/action/hand.svg";
import send from "../../assets/action/send.svg";
import heart from "../../assets/action/heart.svg";

const Data = () => {
  return (
    <>
      <div className="home__data">
        <h1 className="home__title">
          Quoc Chuong <img src={hand} className="home__hand" alt="Hand" />
        </h1>
        <h3 className="home__subtitle">Backend Developer</h3>
        <p className="home__description">
          🎓 I'm a student at FPT University Quy Nhon.
          <br />
          🔭 I’m currently learning Backend NodeJS.
        </p>

        <div className="button__container">
          <a href="#contact" className="button button--flex">
            Say Hello{" "}
            <img src={send} alt="Send" style={{ marginLeft: "0.3rem" }} />
          </a>
          <a
            href="https://ko-fi.com/bakaqc"
            className="button button--flex"
            target="_blank"
          >
            Donate{" "}
            <img src={heart} alt="Heart" style={{ marginLeft: "0.3rem" }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Data;
