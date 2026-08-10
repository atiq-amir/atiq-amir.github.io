
import React from "react";
import "./css/Education.css";

import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChartLine,
} from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Advanced Diploma in Software Engineering",
      institute: "Aptech Global Learning Solutions",
      duration: "In Progress",
      location: "Karachi, Pakistan",
      description:
        "Currently pursuing an advanced software engineering diploma with a focus on programming, web development, databases, software engineering principles, and modern application development technologies.",
      status: "Currently Studying",
      cgpa: "3.00 CGPA",
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">

        {/* Section Heading */}
        <div className="education-heading">
          <span className="education-subtitle">
            MY JOURNEY
          </span>

          <h2>
            Education <span>& Learning</span>
          </h2>

          <p>
            The academic foundation and technical knowledge shaping
            my journey as a software engineer.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div
              className={`education-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={item.degree}
            >

              {/* Timeline Icon */}
              <div className="education-icon">
                <FaGraduationCap />
              </div>

              {/* Education Card */}
              <div className="education-card">

                <div className="education-card-top">
                  <span className="education-status">
                    {item.status}
                  </span>

                  <span className="education-number">
                    01
                  </span>
                </div>

                <h3>{item.degree}</h3>

                <h4>{item.institute}</h4>

                {/* Education Meta */}
                <div className="education-meta">

                  <span>
                    <FaCalendarAlt />
                    {item.duration}
                  </span>

                  <span>
                    <FaMapMarkerAlt />
                    {item.location}
                  </span>

                  <span>
                    <FaChartLine />
                    {item.cgpa}
                  </span>

                </div>

                <p>{item.description}</p>

                <div className="education-line"></div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

