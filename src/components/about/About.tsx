import AboutImg from "../../assets/info/baka.jpg";
import CV from "../../assets/info/QuocChuongCV.pdf";
import file from "../../assets/action/files.svg";
import Info from "./Info";
import "./About.scss";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />

          <div className="about__data">
            <Info />

            <p className="about__description">
              I am a Backend Developer specializing in Java, adept at crafting
              robust server-side solutions. Passionate about solving intricate
              technical challenges, I am committed to delivering high-quality
              software solutions that meet user needs effectively.
            </p>

            <a download="" href={CV} className="button button--flex">
              Dowload CV{" "}
              <img src={file} alt="CV" style={{ marginLeft: "0.3rem" }} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
