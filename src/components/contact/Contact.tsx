import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import send from "../../assets/action/send.svg";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_g9mbx46", "template_ww0eh47", form.current, {
          publicKey: "hEv8kqYAaIKmmPeDx",
        })
        .then(
          () => {
            (e.target as HTMLFormElement).reset();
            setMessage("SUCCESS");
          },
          (error) => {
            console.log("FAILED", error.text);
            setMessage("FAILED");
          }
        );
    }
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Get In Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>

                <h3 className="contact__card__title">Email</h3>
                <span className="contact__card-data">
                  quocchuong3k@gmail.com
                </span>

                <a
                  href="mailto:quocchuong3k@gmail.com.com"
                  className="contact__button"
                  target="_blank"
                >
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxs-phone-call contact__card-icon"></i>

                <h3 className="contact__card__title">Telephone</h3>
                <span className="contact__card-data">123-456-789</span>
              </div>

              <div className="contact__card">
                <i className="bx bxl-discord-alt contact__card-icon"></i>

                <h3 className="contact__card__title">Discord</h3>
                <span className="contact__card-data">Quoc Chuong - BaKa</span>

                <a
                  href="https://discord.gg/RRFQVqfJ"
                  className="contact__button"
                  target="_blank"
                >
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact__content">
            <h3 className="contact__title">Write me your project</h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Project</label>
                <textarea
                  name="project"
                  className="contact__form-input"
                  placeholder="Write your project"
                ></textarea>
              </div>

              <div className="contact__form-action">
                <button type="submit" className="button button--flex">
                  Send Message{" "}
                  <img src={send} alt="Send" style={{ marginLeft: "0.3rem" }} />
                </button>

                {message && (
                  <h3 className={`message ${message.toLowerCase()}`}>
                    {message}
                    {message === "SUCCESS" ? (
                      <i className="bx bx-check-circle message__icon"></i>
                    ) : (
                      <i className="bx bx-x message__icon"></i>
                    )}
                  </h3>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
