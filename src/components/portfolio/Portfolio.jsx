import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization (demo)",
    github: "https://github.com/Zetah07",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 2,
    img: IMG2,
    title: "Charts templates & Infographics in Figma (demo)",
    github: "https://github.com/Zetah07",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 3,
    img: IMG3,
    title: "Figma Dashboard Ui kit for data design web apps (demo)",
    github: "https://github.com/Zetah07",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 4,
    img: IMG4,
    title: "Maintainig tasks and tracking progress (demo)",
    github: "https://github.com/Zetah07",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 5,
    img: IMG5,
    title: "Charts templates & Infographics in Figma (demo)",
    github: "https://github.com/Zetah07",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 6,
    img: IMG6,
    title: "Charts templates & Infographics in Figma (demo)",
    github: "https://github.com/Zetah07",
    demo: "https://dribbble.com/Alien_pixels",
  },
];

const Porfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, img, title, github, demo }) => {
          return (
            <articule key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={img} alt="portfolio" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} classname="btn">
                  Github
                </a>
                <a href={demo} classname="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </articule>
          );
        })}
      </div>
    </section>
  );
};

export default Porfolio;
