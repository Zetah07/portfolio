/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp, BsTelegram} from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b86uorr', 'template_qwtg2yj', form.current, 'GUiaABIsmx6n_0FBJ')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'> 
      <div className='contact__options'>

        <article className='contact__option'>
          <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>jszetah@gmail.com</h5>
          <a href='mailto:jszetah@gmail.com' target='_blank' >Send a message</a>
      </article>
      
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+573186110790</h5>
          <a href=
          'https://wa.me/+573186110790' target='_blank' >WhatsApp</a>
      </article>
      
      <article className='contact__option'>
          <BsTelegram className='contact__option-icon'/>
          <h4>Telegram</h4>
          <h5>Zetah_JS</h5>
          <a href='https://t.me/Zetah_JS' target='_blank' >Telegram</a>
      </article>

      </div>


{/*-------------END OF CONTACT options--------------------------*/}
      <form ref={form} onSubmit={sendEmail} >
        <input type='text' name='' placeholder='Your Full Name' required />
        <input type='email' name='' placeholder='Your Email' required />
        <textarea name='message' rows='10' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary' >Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact