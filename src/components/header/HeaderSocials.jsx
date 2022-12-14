import React from 'react';
import{BsLinkedin} from 'react-icons/bs';
import{FaTwitterSquare, FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/zetahdev" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/Zetah_JS" target="_blank"><FaTwitterSquare/></a>
        <a href="https://github.com/Zetah07" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials