import AboutImg from "../../assets/info/baka.jpg";
import CV from "../../assets/info/Quoc_Chuong_Backend_Developer_CV.pdf";
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
              I aspire to be a skilled Backend Developer, mastering technical
              foundations and contributing to business goals. Seeking a
              growth-oriented environment to enhance my system design and
              problem-solving skills, with a long-term goal of building scalable
              and reliable backend systems.
            </p>

            <a download="" href={CV} className="button button--flex">
              Download CV{" "}
              <img src={file} alt="CV" style={{ marginLeft: "0.3rem" }} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
