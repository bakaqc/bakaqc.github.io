import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SyncLoader from "react-spinners/SyncLoader";
import SectionHeader from "../common/SectionHeader";
import "./Contact.scss";
import { EMAIL } from "../../data/socials";

type Status = "idle" | "loading" | "success" | "failed";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      () => setCopied(false)
    );
  };

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
        <SectionHeader
          index="05"
          path="contact"
          title="Open a channel."
          subtitle="Got a project or a question? Pick a channel — I usually reply within a day."
        />

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

            <button type="button" className="contact__copy" onClick={copyEmail}>
              <i className={`uil ${copied ? "uil-check" : "uil-copy"}`}></i>
              {copied ? "copied to clipboard" : `copy ${EMAIL}`}
            </button>
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
                    <SyncLoader color={"#0d0d0f"} size={6} />
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
