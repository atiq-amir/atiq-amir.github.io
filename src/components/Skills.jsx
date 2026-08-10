
import React from "react";
import "./css/Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaServer,
  FaMicrosoft,
  FaCode,
  FaCloud,
  FaCogs,
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, interactive and user-friendly interfaces.",
      icon: "</>",
      skills: [
        {
          name: "HTML5",
          level: "Advanced",
          icon: FaHtml5,
          className: "html-icon",
        },
        {
          name: "CSS3",
          level: "Advanced",
          icon: FaCss3Alt,
          className: "css-icon",
        },
        {
          name: "JavaScript",
          level: "Intermediate",
          icon: FaJs,
          className: "js-icon",
        },
        {
          name: "React.js",
          level: "Intermediate",
          icon: FaReact,
          className: "react-icon",
        },
        {
          name: "Bootstrap",
          level: "Advanced",
          icon: FaBootstrap,
          className: "bootstrap-icon",
        },
        {
          name: "WordPress",
          level: "Intermediate",
          icon: FaWordpress,
          className: "wordpress-icon",
        },
      ],
    },

    {
      title: "Backend Development",
      description:
        "Developing server-side applications, APIs and full-stack solutions.",
      icon: "{}",
      skills: [
        {
          name: "PHP",
          level: "Intermediate",
          icon: FaPhp,
          className: "php-icon",
        },
        {
          name: "Laravel",
          level: "Intermediate",
          icon: FaLaravel,
          className: "laravel-icon",
        },
        {
          name: "Node.js",
          level: "Intermediate",
          icon: FaNodeJs,
          className: "node-icon",
        },
        {
          name: "Express.js",
          level: "Intermediate",
          icon: FaServer,
          className: "express-icon",
        },
        {
          name: "ASP.NET Core",
          level: "Intermediate",
          icon: FaCode,
          className: "aspnet-icon",
        },
        {
          name: "C#",
          level: "Intermediate",
          icon: FaCode,
          className: "csharp-icon",
        },
      ],
    },

    {
      title: "Database & Cloud",
      description:
        "Working with relational databases, NoSQL systems and cloud technologies.",
      icon: "DB",
      skills: [
        {
          name: "MySQL",
          level: "Intermediate",
          icon: FaDatabase,
          className: "mysql-icon",
        },
        {
          name: "MS SQL Server",
          level: "Intermediate",
          icon: FaDatabase,
          className: "sqlserver-icon",
        },
        {
          name: "MongoDB",
          level: "Intermediate",
          icon: FaDatabase,
          className: "mongodb-icon",
        },
        {
          name: "Azure",
          level: "Intermediate",
          icon: FaCloud,
          className: "azure-icon",
        },
      ],
    },

    {
      title: "Real-Time & APIs",
      description:
        "Building connected applications with real-time communication and APIs.",
      icon: "↔",
      skills: [
        {
          name: "Socket.io",
          level: "Intermediate",
          icon: FaServer,
          className: "socket-icon",
        },
        {
          name: "WebRTC",
          level: "Intermediate",
          icon: FaCode,
          className: "webrtc-icon",
        },
        {
          name: "RESTful APIs",
          level: "Intermediate",
          icon: FaServer,
          className: "api-icon",
        },
        {
          name: "JWT Authentication",
          level: "Intermediate",
          icon: FaCogs,
          className: "jwt-icon",
        },
      ],
    },

    {
      title: "Tools & Version Control",
      description:
        "Tools and workflows used to develop, manage and maintain projects.",
      icon: "⌘",
      skills: [
        {
          name: "Git",
          level: "Intermediate",
          icon: FaGitAlt,
          className: "git-icon",
        },
        {
          name: "GitHub",
          level: "Intermediate",
          icon: FaGithub,
          className: "github-icon",
        },
        {
          name: "Microsoft Office",
          level: "Advanced",
          icon: FaMicrosoft,
          className: "office-icon",
        },
        {
          name: "MS Excel",
          level: "Advanced",
          icon: FaMicrosoft,
          className: "excel-icon",
        },
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Section Heading */}
        <div className="skills-heading">
          <span className="section-label">
            TECHNICAL SKILLS
          </span>

          <h2>
            Tools I use to <span>build.</span>
          </h2>

          <p>
            Technologies, development tools and technical skills
            I use to build modern, responsive and practical
            digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div
              className="skill-category"
              key={category.title}
              style={{
                "--category-index": index,
              }}
            >

              {/* Category Header */}
              <div className="category-header">

                <div className="category-icon">
                  {category.icon}
                </div>

                <div>
                  <h3>{category.title}</h3>

                  <p>{category.description}</p>
                </div>

              </div>

              {/* Skills */}
              <div className="skill-list">

                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      className="skill-item"
                      key={skill.name}
                    >

                      <div
                        className={`skill-icon ${skill.className}`}
                      >
                        <Icon />
                      </div>

                      <div className="skill-info">
                        <strong>
                          {skill.name}
                        </strong>

                        <span>
                          {skill.level}
                        </span>
                      </div>

                      <div className="skill-arrow">
                        ↗
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>
          ))}

        </div>

        {/* Currently Learning */}
        <div className="skills-footer">

          <span>
            Currently exploring
          </span>

          <div className="learning-tech">

            <div className="learning-item">
              <span>01</span>
              React Ecosystem
            </div>

            <div className="learning-item">
              <span>02</span>
              Full-Stack Development
            </div>

            <div className="learning-item">
              <span>03</span>
              Real-Time Applications
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;

