import React from 'react'
import './services.css'
import { BiCheckDouble } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='service'>
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className='container service__container'> 
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>User Interface (UI) Design --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Prototyping --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

          </ul>
        </article>

        {/* ---------end of iu/ux------------// */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

          </ul>
        </article>
        {/* WEB DEVELOMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Wireframing --- Lorem ipsum dolor sit amet adipisicing elit</p>
            </li>

          </ul>
        </article>

        {/* CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services