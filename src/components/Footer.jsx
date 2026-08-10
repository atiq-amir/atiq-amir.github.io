
import "./css/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Footer Top */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>&lt;</span>
              Atiq
              <span>/&gt;</span>
            </a>

            <h3>Software Engineer</h3>

            <p>
              Building modern web applications, real-time platforms,
              and practical digital experiences with clean and
              reliable technology.
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-links-wrapper">

            {/* Navigation */}
            <div className="footer-column">
              <h3>Navigation</h3>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Connect */}
            <div className="footer-column">
              <h3>Connect</h3>

              <a
                href="https://github.com/atiq-amir"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/atiq-aamir-36653b36b"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:atiqqaptech@gmail.com">
                Email
              </a>

              <a href="tel:+923352562294">
                +92 335 2562294
              </a>

              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Atiq Aamir. All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top
            <span>↑</span>
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

