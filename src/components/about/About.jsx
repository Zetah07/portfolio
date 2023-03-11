import React from "react";
import ME from "../../assets/me-about.jpg";
import { FiUsers } from "react-icons/fi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3 Clients nowadays</small>
            </article>

            <article className="about__card">
              <IoFolderOpenOutline className="about__icon" />
              <h5>Proyect's</h5>
              <small>6+ complete</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 month Working</small>
            </article>
          </div>
          <br/>
          <p>
            I'm a driven Full Stack Developer who loves problem-solving. I've
            developed web and mobile apps using various programming languages
            and technologies.<br/>I'm passionate about React and Express, but I'm
            open to learning and using any tech that will benefit my team. I
            understand front-end and back-end technologies and can integrate
            them to build robust and scalable solutions.<br/>I'm always eager to
            learn and tackle complex problems, and I'm willing to put in the
            effort to improve my skills and help my team succeed. If you need a
            Full Stack Developer with a focus on React and Express and a drive
            to learn and use new technologies, I'm ready to bring my experience
            and skills to your project.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
