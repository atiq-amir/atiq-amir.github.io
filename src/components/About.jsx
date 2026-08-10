
import "./css/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <span className="section-label">ABOUT ME</span>

          <h2>
            Building with <span>purpose.</span>
          </h2>

          <p>
            A little about who I am, what I do, and what drives me
            as a software engineer.
          </p>
        </div>

        {/* Main About Layout */}
        <div className="about-content">

          {/* Left Side */}
          <div className="about-main">

            <div className="about-intro">
              <span className="intro-line"></span>

              <p>
                I'm <strong>Atiq Aamir</strong>, a Software Engineer
                and Full Stack Developer focused on building modern
                web applications and practical digital solutions.
              </p>
            </div>

            <p className="about-text">
              I have hands-on experience working across frontend and
              backend development, with technologies including
              React.js, Node.js, Express.js, MongoDB, PHP, Laravel,
              ASP.NET Core and C#.
            </p>

            <p className="about-text">
              My experience also includes real-time application
              development using technologies such as Socket.io and
              WebRTC, along with RESTful APIs and JWT authentication.
              I enjoy turning ideas into functional applications that
              solve practical problems.
            </p>

            {/* Highlights */}
            <div className="about-highlights">

              <div className="highlight">
                <div className="highlight-icon">
                  &lt;/&gt;
                </div>

                <div>
                  <h3>Full Stack Development</h3>
                  <p>
                    Building applications across frontend and backend.
                  </p>
                </div>
              </div>

              <div className="highlight">
                <div className="highlight-icon">
                  ✦
                </div>

                <div>
                  <h3>Problem Solving</h3>
                  <p>
                    Turning ideas and challenges into practical solutions.
                  </p>
                </div>
              </div>

              <div className="highlight">
                <div className="highlight-icon">
                  ↗
                </div>

                <div>
                  <h3>Real-Time Development</h3>
                  <p>
                    Creating collaborative and real-time web experiences.
                  </p>
                </div>
              </div>

              <div className="highlight">
                <div className="highlight-icon">
                  ◉
                </div>

                <div>
                  <h3>Continuous Learning</h3>
                  <p>
                    Continuously improving my technical skills.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="about-side">

            {/* Developer Card */}
            <div className="about-profile-card">

              <div className="profile-card-top">
                <div className="profile-avatar">
                  AA
                </div>

                <div>
                  <h3>Atiq Aamir</h3>
                  <span>Software Engineer</span>
                </div>
              </div>

              <div className="profile-status">
                <span></span>
                Open to opportunities
              </div>

              <div className="profile-divider"></div>

              <div className="profile-info">

                <div>
                  <span>Based in</span>
                  <strong>Karachi, Pakistan</strong>
                </div>

                <div>
                  <span>Focus</span>
                  <strong>Full Stack Development</strong>
                </div>

                <div>
                  <span>Education</span>
                  <strong>Advanced Diploma in Software Engineering</strong>
                </div>

              </div>

            </div>

            {/* Quick Stats */}
            <div className="about-stats">

              <div className="stat-card">
                <strong>07</strong>
                <span>Projects</span>
              </div>

              <div className="stat-card">
                <strong>03+</strong>
                <span>Full-Stack Apps</span>
              </div>

              <div className="stat-card">
                <strong>10+</strong>
                <span>Technologies</span>
              </div>

            </div>

            {/* Quote */}
            <div className="about-quote">
              <span className="quote-mark">“</span>

              <p>
                Building practical solutions through code,
                continuous learning, and thoughtful development.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

