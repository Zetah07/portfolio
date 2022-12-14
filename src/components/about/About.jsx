import React from "react";
import ME from "../../assets/me-about.jpg";
import { FiUsers } from "react-icons/fi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import './about.css'



const About = () => {
  return (
    <section id='about' >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About img' />
          </div>        
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2 Clients nowadays</small>
            </article>

            <article className='about__card'>
              <IoFolderOpenOutline className='about__icon'/>
              <h5>Proyect's</h5>
              <small>5+ complete</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 month Working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam. Lorem ipsum
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>

    </section>
  )
}

export default About