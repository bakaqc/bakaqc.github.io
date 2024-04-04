import Github from "../../assets/images/social/github.jpg";
import Facebook from "../../assets/images/social/facebook.jpg";
import Linkedin from "../../assets/images/social/linkedin.jpg";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/bakaqc"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Github}
          alt="Github"
          style={{ width: "60px", height: "60px" }}
        />
      </a>

      <a
        href="https://www.facebook.com/dqchuongbk"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Facebook}
          alt="Facebook"
          style={{ width: "60px", height: "60px" }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/bakaqc"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Linkedin}
          alt="Linkedin"
          style={{ width: "60px", height: "60px" }}
        />
      </a>
    </div>
  );
};

export default Social;
