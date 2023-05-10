import React from 'react'
import './header.css';
import CTA from './CTA';
// import ME from '../../assets/Shutterstock_1537188422.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Johan Sebastian Castro</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className='img' src='https://i.ibb.co/rtB2FG4/Shutterstock-1537188422.png' alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header