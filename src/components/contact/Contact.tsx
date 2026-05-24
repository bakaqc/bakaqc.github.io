import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SyncLoader from "react-spinners/SyncLoader";
import "./Contact.scss";

type Status = "idle" | "loading" | "success" | "failed";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus("loading");

    emailjs
      .sendForm("service_g33a6gw", "template_hgjjyxb", form.current, {
        publicKey: "9vsUN7poE5dhIXNXM",
      })
      .then(() => {
        if (form.current) {
          return emailjs.sendForm(
            "service_g33a6gw",
            "template_dl39x26",
            form.current,
            { publicKey: "9vsUN7poE5dhIXNXM" }
          );
        }
      })
      .then(() => {
        (e.target as HTMLFormElement).reset();
        setStatus("success");
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("failed");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <span className="section__eyebrow">Contact</span>
        <h2 className="section__title">Let's talk.</h2>
        <p className="section__subtitle">
          Got a project, a question, or just want to say hi? Pick whichever
          channel feels right — I usually reply within a day or two.
        </p>

        <div className="contact__grid">
          <div className="contact__channels">
            <a
              className="contact__channel"
              href="mailto:bakaqc.dev@gmail.com"
            >
              <i className="uil uil-envelope-alt"></i>
              <div>
                <span className="contact__channel-label">Email</span>
                <span className="contact__channel-value">
                  bakaqc.dev@gmail.com
                </span>
              </div>
              <i className="uil uil-arrow-up-right contact__channel-arrow"></i>
            </a>

            <a
              className="contact__channel"
              href="tel:+84763707144"
            >
              <i className="uil uil-phone-volume"></i>
              <div>
                <span className="contact__channel-label">Phone</span>
                <span className="contact__channel-value">076 370 7144</span>
              </div>
              <i className="uil uil-arrow-up-right contact__channel-arrow"></i>
            </a>

            <a
              className="contact__channel"
              href="https://discord.gg/RRFQVqfJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-discord"></i>
              <div>
                <span className="contact__channel-label">Discord</span>
                <span className="contact__channel-value">Quoc Chuong · BaKa</span>
              </div>
              <i className="uil uil-arrow-up-right contact__channel-arrow"></i>
            </a>

            <a
              className="contact__channel"
              href="https://www.linkedin.com/in/bakaqc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin"></i>
              <div>
                <span className="contact__channel-label">LinkedIn</span>
                <span className="contact__channel-value">linkedin.com/in/bakaqc</span>
              </div>
              <i className="uil uil-arrow-up-right contact__channel-arrow"></i>
            </a>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <header className="contact__form-head">
              <h3>Send a quick message</h3>
              <p>Filled fields go straight to my inbox.</p>
            </header>

            <label className="contact__field">
              <span>Your name</span>
              <input type="text" name="name" placeholder="Jane Doe" required />
            </label>

            <label className="contact__field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="jane@company.com"
                required
              />
            </label>

            <label className="contact__field">
              <span>What's on your mind?</span>
              <textarea
                name="project"
                placeholder="Short description of what you'd like to chat about…"
                rows={5}
                required
              />
            </label>

            <div className="contact__form-action">
              <button
                type="submit"
                className="contact__submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    Sending
                    <SyncLoader color={"#ffffff"} size={6} />
                  </>
                ) : (
                  <>
                    Send message
                    <i className="uil uil-message"></i>
                  </>
                )}
              </button>

              {status === "success" && (
                <span className="contact__message contact__message--ok">
                  <i className="uil uil-check-circle"></i>
                  Message sent — check your inbox for confirmation.
                </span>
              )}
              {status === "failed" && (
                <span className="contact__message contact__message--err">
                  <i className="uil uil-exclamation-triangle"></i>
                  Failed to send. Please try again or email me directly.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
