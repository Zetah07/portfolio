/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/rustika.jpeg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/dashdoard.PNG";
import IMG4 from "../../assets/grooming.PNG";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/netlix.PNG";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Rustika Restaurant",
    github: "https://github.com/SourceSquack/RustikaFront",
    demo: "https://rustika-front.vercel.app/",
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
    title: "Grooming Argentina, Real Project (Dashbpard)",
    github: "https://github.com/Zetah07/Grooming-Argentina",
    demo: "https://celadon-sprite-8d4f64.netlify.app/",
  },
  {
    id: 4,
    img: IMG4,
    title: "Grooming Argentina, Real Project (webPage)",
    github: "https://github.com/Zetah07/Grooming-Argentina",
    demo: "https://helpful-conkies-214a74.netlify.app/",
  },
  {
    id: 5,
    img: IMG5,
    title: "Individual project in bootcamp of Countries",
    github: "https://github.com/Zetah07/PI-COUNTRIES",
    demo: "https://github.com/Zetah07/PI-COUNTRIES",
  },
  {
    id: 6,
    img: IMG6,
    title: "Netflix Clone",
    github: "https://github.com/Zetah07/Netflix-clone",
    demo: "https://netflix-clone-zetah.vercel.app/auth",
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
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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
