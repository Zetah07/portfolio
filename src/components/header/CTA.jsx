import React from 'react'
import CV from '../../assets/CV Johan Sebastian Castro english.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Lest' Talk</a>
    </div>
  )
}

export default CTA