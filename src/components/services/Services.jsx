import React from "react";
import "./services.css";
import { BiCheckDouble } from "react-icons/bi";

const Services = () => {
  return (
    <section id="service">
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                UI Design --- I can use Figma, Sketch to create visually
                appealing and easy-to-use designs.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Prototyping --- I can create prototypes to validate site or app
                functionality and enhance user experience.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Responsive User Interface Development --- I can use HTML, CSS,
                and JavaScript to make your user interface adapt to different
                devices and screen resolutions.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                UX Optimization --- I can enhance accessibility, usability, and
                site navigation to ensure an easy-to-use and intuitive user
                experience.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Third-party API Integration --- I can integrate various services
                and tools such as payments, emails, and authentication using
                Postman and Axios.
              </p>
            </li>
          </ul>
        </article>

        {/* ---------end of iu/ux------------// */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Performance optimization --- I can improve your website's speed
                and loading time, enhancing user experience and search engine
                ranking.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Interactive user interface development --- I can create
                immersive and engaging user interfaces that provide an
                exceptional user experience.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Animation and visual effects development --- I can create
                animations and effects to enhance website aesthetics and improve
                user experience, such as loading animations and scrolling
                effects.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Performance optimization ---I can improve your website's speed
                and loading time, enhancing user experience and search engine
                ranking.
              </p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Backend Dev</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                API Development --- I can create APIs that integrate with
                different applications and services, from RESTful APIs to custom
                API services to meet specific business needs.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Database Development --- I can create efficient and secure
                databases that meet specific business requirements and are
                compatible with different types of DBMS.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Security Implementation --- I can secure your app with
                authentication, encryption, and vulnerability detection.
              </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>
                Performance Optimization --- I can analyze bottlenecks and
                optimize database queries to improve your app's speed and
                efficiency, reducing load times and enhancing performance.
              </p>
            </li>
          </ul>
        </article>

        {/* CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
