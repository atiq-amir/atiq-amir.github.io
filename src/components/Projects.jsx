
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./css/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Syncora",
      category: "Full-Stack / Real-Time Application",
      description:
        "Built a real-time video conferencing and collaboration platform featuring multi-participant video calls, live chat, screen and file sharing, a collaborative whiteboard, and room-based meetings.",
      image: "/Images/projects/syncora.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "WebRTC",
        "Socket.io",
        "JWT",
      ],
      github: "#",
      demo: "",
      featured: true,
    },

    {
      title: "Sprinto",
      category: "Full-Stack / Project Management",
      description:
        "Developed a project management tool with drag-and-drop Kanban boards, task prioritization, due dates, assignees, templates, and real-time collaboration.",
      image: "/Images/projects/sprinto.png",
      technologies: [
        "React (Vite)",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
      ],
      github: "#",
      demo: "",
      featured: true,
    },

    {
      title: "Arvaluna",
      category: "Full-Stack / E-Commerce",
      description:
        "Created a fashion e-commerce web application with a product catalog, admin panel, image uploads, and secure authentication.",
      image: "/Images/projects/arvaluna.png",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Multer",
        "JWT",
      ],
      github: "#",
      demo: "",
      featured: false,
    },

    {
      title: "Kernel Travels",
      category: "Full-Stack / Management System",
      description:
        "Created a travels and tourist management system designed to manage travel-related operations through a structured web application.",
      image: "/Images/projects/kernel-travels.png",
      technologies: [
        "ASP.NET Core",
        "C#",
      ],
      github: "#",
      demo: "https://kernal.runasp.net/",
      featured: false,
    },

    {
      title: "Universal Stationery",
      category: "Front-End Website",
      description:
        "Created a responsive stationery website with a clean product-focused interface and an organized shopping experience.",
      image: "/Images/projects/universal-stationery.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
      ],
      github: "#",
      demo: "",
      featured: false,
    },

    {
      title: "Elegant Salon",
      category: "Full-Stack / Management System",
      description:
        "Created a salon management system with a web-based interface and backend functionality for managing salon-related operations.",
      image: "/Images/projects/elegant-salon.png",
      technologies: [
        "PHP",
        "MySQL",
      ],
      github: "#",
      demo: "https://elegantsalon.infinityfree.me/?i=1",
      featured: false,
    },

    {
      title: "Clothic",
      category: "Front-End / E-Commerce",
      description:
        "Created a modern clothing website with a responsive interface and structured product presentation for an online fashion store.",
      image: "/Images/projects/clothic.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
      ],
      github: "#",
      demo: "https://clothicc.netlify.app/",
      featured: false,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">

          <div>
            <span className="section-label">
              SELECTED WORK
            </span>

            <h2>
              Things I've <span>built.</span>
            </h2>
          </div>

          <p>
            A selection of full-stack, real-time, e-commerce,
            and web development projects built using modern
            technologies.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className={`project-card ${
                project.featured
                  ? "project-featured"
                  : ""
              }`}
              key={project.title}
              style={{
                "--project-index": index,
              }}
            >

              {/* Project Image */}
              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="project-image"
                />

                <div className="project-image-overlay">
                  <span>
                    {project.demo
                      ? "VIEW PROJECT"
                      : "DEMO UNAVAILABLE"}
                  </span>
                </div>

                {/* Number */}
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>

              {/* Project Content */}
              <div className="project-content">

                {/* Category */}
                <div className="project-meta">
                  <span>
                    {project.category}
                  </span>

                  <span className="project-line" />
                </div>

                {/* Title */}
                <h3>
                  {project.title}
                </h3>

                {/* Description */}
                <p>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                {/* Links */}
                <div className="project-links">

                  {/* GitHub */}
                  <a
                    href={
                      project.github !== "#"
                        ? project.github
                        : undefined
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-link github-link ${
                      project.github === "#"
                        ? "link-disabled"
                        : ""
                    }`}
                    onClick={(e) => {
                      if (project.github === "#") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <FaGithub />
                    <span>
                      {project.github !== "#"
                        ? "GitHub"
                        : "Not Available Right Now"}
                    </span>
                  </a>

                  {/* Live Demo */}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      <span>
                        Live Demo
                      </span>

                      <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="project-link demo-link demo-disabled"
                      disabled
                    >
                      <span>
                        Not Available Right Now
                      </span>
                    </button>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="projects-bottom">

          <span>
            More projects available on GitHub
          </span>

          <a
            href="https://github.com/atiq-amir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            View GitHub
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;

