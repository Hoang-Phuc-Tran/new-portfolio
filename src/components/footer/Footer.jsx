import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="/#" className='footer__logo'>Hoang Phuc Tran</a>

      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/hoang-phuc-tran/"><BsLinkedin/></a>
        <a href="https://github.com/Hoang-Phuc-Tran"><BsGithub/></a>
        <a href="https://www.instagram.com/phuctran0605/"><GrInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer