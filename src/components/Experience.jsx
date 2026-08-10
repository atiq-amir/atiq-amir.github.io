
import React from "react";
import "./css/Experience.css";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaLaptopCode,
  FaEnvelope,
  FaVideo,
} from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "CODEALPHA",
      duration: "Jul 2026 – Present",
      location: "Remote",
      type: "Professional Experience",
      icon: <FaLaptopCode />,
      description:
        "Working on full-stack web development tasks, contributing to modern web applications and implementing frontend and backend functionality using contemporary development technologies.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
      ],
    },

    {
      role: "Email Marketing & Management",
      company: "GAOTEK INC.",
      duration: "Feb 2026 – Present",
      location: "Remote",
      type: "Professional Experience",
      icon: <FaEnvelope />,
      description:
        "Managing email marketing and related administrative activities with a strong focus on data accuracy, record management, verification, and maintaining consistent quality across tasks.",
      technologies: [
        "Email Management",
        "Data Management",
        "Data Verification",
        "Microsoft Excel",
        "Microsoft Office",
      ],
    },

    {
      role: "Full Stack Developer",
      company: "CODECRAFT INFOTECH",
      duration: "Nov 2025 – Dec 2025",
      location: "Remote",
      type: "Internship",
      icon: <FaCode />,
      description:
        "Gained practical experience in full-stack development while working on web application development tasks and applying frontend and backend technologies in a professional environment.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "PHP",
      ],
    },

    {
      role: "Video Editor",
      company: "Self-Employed / Freelance",
      duration: "Aug 2024 – May 2025",
      location: "Remote",
      type: "Freelance",
      icon: <FaVideo />,
      description:
        "Created and edited digital video content for freelance projects using modern video editing tools while focusing on quality, presentation, and engaging visual content.",
      technologies: [
        "CapCut",
        "Wondershare Filmora",
        "Video Editing",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* Section Heading */}
        <div className="experience-heading">
          <span className="experience-subtitle">
            MY EXPERIENCE
          </span>

          <h2>
            Professional <span>Journey</span>
          </h2>

          <p>
            The professional experiences and opportunities that have
            shaped my technical skills and helped me grow as a
            software engineer.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <div
              className={`experience-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={`${experience.company}-${experience.role}`}
            >

              {/* Timeline Node */}
              <div className="experience-node">
                {experience.icon}
              </div>

              {/* Experience Card */}
              <div className="experience-card">

                {/* Card Header */}
                <div className="experience-card-header">

                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>{experience.role}</h3>

                    <h4>{experience.company}</h4>
                  </div>

                  <span className="experience-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Meta Information */}
                <div className="experience-meta">

                  <span>
                    <FaCalendarAlt />
                    {experience.duration}
                  </span>

                  <span>
                    <FaMapMarkerAlt />
                    {experience.location}
                  </span>

                </div>

                {/* Description */}
                <p className="experience-description">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="experience-tech">

                  <span className="tech-title">
                    Skills & Technologies
                  </span>

                  <div className="tech-list">
                    {experience.technologies.map(
                      (tech, techIndex) => (
                        <span key={techIndex}>
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                </div>

                {/* Bottom Accent */}
                <div className="experience-accent"></div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="experience-footer">
          <FaBriefcase />

          <span>
            Always learning. Always building. Always improving.
          </span>
        </div>

      </div>
    </section>
  );
};

export default Experience;

