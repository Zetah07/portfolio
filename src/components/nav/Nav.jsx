import React, { useState } from "react";
import "./nav.css";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineUser, AiOutlineWhatsApp } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <HiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a href="#services" 
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""} >
        <RiServiceLine />
      </a>
      <a href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        >
        <AiOutlineWhatsApp />
      </a>
    </nav>
  );
};

export default Nav;
