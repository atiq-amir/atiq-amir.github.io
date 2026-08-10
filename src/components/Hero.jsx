
import "./css/Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* Animated Background */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          {/* Availability Badge */}
          <div className="availability">
            <span className="availability-dot"></span>
            Open to opportunities
          </div>

          {/* Main Heading */}
          <h1>
            Hi, I'm{" "}
            <span className="hero-name">
              Atiq Aamir
            </span>
            <br />

            <span className="hero-title">
              Software Engineer
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            I build modern full-stack web applications and practical
            digital solutions using technologies like React.js,
            Node.js, Express.js, MongoDB and more. I enjoy turning
            ideas into reliable and meaningful digital experiences.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-btn primary-btn"
            >
              View My Work
              <span>↗</span>
            </a>

            <a
              href="/CV.pdf"
              download
              className="hero-btn secondary-btn"
            >
              Download CV
              <span>↓</span>
            </a>

          </div>

          {/* Social Links */}
          <div className="hero-socials">

            <a
              href="https://github.com/atiq-amir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <span className="social-divider"></span>

            <a
              href="https://linkedin.com/in/atiq-aamir-36653b36b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <span className="social-divider"></span>

            <a href="mailto:atiqqaptech@gmail.com">
              Email
            </a>

          </div>

        </div>

        {/* Right Visual */}
        <div className="hero-visual">

          <div className="code-window">

            {/* Window Header */}
            <div className="window-header">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="window-title">
                developer.js
              </div>

              <div className="window-space"></div>

            </div>

            {/* Code */}
            <div className="code-content">

              <div>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span>{" "}
                <span className="code-white">=</span>{" "}
                <span className="code-yellow">{"{"}</span>
              </div>

              <div className="code-indent">
                <span className="code-blue">name</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Atiq Aamir"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent">
                <span className="code-blue">role</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Software Engineer"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent">
                <span className="code-blue">stack</span>
                <span className="code-white">:</span>{" "}
                <span className="code-yellow">[</span>
              </div>

              <div className="code-indent-more">
                <span className="code-green">
                  "React.js"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent-more">
                <span className="code-green">
                  "Node.js"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent-more">
                <span className="code-green">
                  "Express.js"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent-more">
                <span className="code-green">
                  "MongoDB"
                </span>
              </div>

              <div className="code-indent">
                <span className="code-yellow">]</span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent">
                <span className="code-blue">focus</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Full-Stack Development"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent">
                <span className="code-blue">passion</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Building useful things"
                </span>
              </div>

              <div>
                <span className="code-yellow">{"}"}</span>
              </div>

              <div className="code-cursor"></div>

            </div>

          </div>

          {/* Floating Cards */}

          <div className="floating-card card-top">
            <span className="floating-icon">
              &lt;/&gt;
            </span>

            <div>
              <strong>Full Stack</strong>
              <small>Frontend + Backend</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span className="floating-icon">
              ✦
            </span>

            <div>
              <strong>Real-Time Apps</strong>
              <small>Building connected experiences</small>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="hero-orbit">
            <div className="orbit-dot"></div>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="scroll-indicator"
      >
        <span className="scroll-mouse">
          <span></span>
        </span>

        <span>
          Scroll to explore
        </span>
      </a>

    </section>
  );
}

export default Hero;

