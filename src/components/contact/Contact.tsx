import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import send from "../../assets/action/send.svg";
import SyncLoader from "react-spinners/SyncLoader";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    if (form.current) {
      // Gửi email chính cho bạn
      emailjs
        .sendForm("service_g33a6gw", "template_hgjjyxb", form.current, {
          publicKey: "9vsUN7poE5dhIXNXM",
        })
        .then((result) => {
          // Gửi auto-reply cho người gửi
          if (form.current) {
            return emailjs.sendForm(
              "service_g33a6gw",
              "template_dl39x26",
              form.current,
              {
                publicKey: "9vsUN7poE5dhIXNXM",
              }
            );
          }
          return result;
        })
        .then(() => {
          (e.target as HTMLFormElement).reset();
          setMessage("SUCCESS");
          setIsLoading(false);

          setTimeout(() => {
            setMessage(null);
          }, 4000);
        })
        .catch((error) => {
          console.log("FAILED", error.text);
          setMessage("FAILED");
          setIsLoading(false);
        });
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
                <span className="contact__card-data">bakaqc.dev@gmail.com</span>

                <a
                  href="mailto:bakaqc.dev@gmail.com"
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
                <span className="contact__card-data">036 347 5716</span>
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
                  required
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Project Description</label>
                <textarea
                  name="project"
                  className="contact__form-input"
                  placeholder="Write your project description"
                  required
                ></textarea>
              </div>

              <div className="contact__form-action">
                <button type="submit" className="button button--flex">
                  Send Message{" "}
                  {isLoading ? (
                    <SyncLoader
                      color={"#29d9f6"}
                      size={10}
                      style={{ marginLeft: "0.5rem" }}
                    />
                  ) : (
                    <img
                      src={send}
                      alt="Send"
                      style={{ marginLeft: "0.3rem" }}
                    />
                  )}
                </button>

                {message && (
                  <h3 className={`message ${message.toLowerCase()}`}>
                    {message === "SUCCESS"
                      ? "Message sent successfully! Check your email for confirmation."
                      : "Failed to send message. Please try again."}
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
