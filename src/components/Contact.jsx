
import React from "react";
import "./css/Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Section Heading */}
        <div className="contact-heading">
          <span className="contact-subtitle">
            GET IN TOUCH
          </span>

          <h2>
            Let's Work <span>Together</span>
          </h2>

          <p>
            Have a project in mind, an opportunity, or just want to
            connect? Feel free to reach out. I'd be happy to hear
            from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-wrapper">

          {/* Left Side */}
          <div className="contact-info">

            <div className="contact-info-header">
              <span className="contact-small-title">
                CONTACT ME
              </span>

              <h3>
                Let's turn your
                <span> ideas into reality.</span>
              </h3>

              <p>
                Whether you're looking for a Software Engineer,
                have a project idea, or want to discuss a
                professional opportunity, I'm open to meaningful
                conversations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="contact-details">

              {/* Email */}
              <a
                href="mailto:atiqqaptech@gmail.com"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <strong>atiqqaptech@gmail.com</strong>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+923352562294"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+92 335 2562294</strong>
                </div>
              </a>

              {/* Location */}
              <div className="contact-detail">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Karachi, Pakistan</strong>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="contact-socials">

              <span>Find me on</span>

              <div className="social-links">

                <a
                  href="https://github.com/atiq-amir"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/atiq-aamir-36653b36b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </div>

          {/* Right Side - Form */}
          <div className="contact-form-wrapper">

            <div className="form-glow"></div>

            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="contact-bottom">

          <div className="contact-status">
            <span className="status-dot"></span>

            <span>
              Open to opportunities
            </span>
          </div>

          <span className="contact-divider"></span>

          <span className="contact-response">
            Available for projects and professional opportunities
          </span>

        </div>

      </div>
    </section>
  );
};

export default Contact;

