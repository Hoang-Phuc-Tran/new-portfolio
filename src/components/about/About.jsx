import React from 'react'
import './about.css'
import ME from '../../assets/me1.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 className='about'>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">

            <img src={ME} alt="Aboutme" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Building front-end and back-end websites.</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
          Hello! I'm Hoang Phuc Tran, a third-year Software Engineering Technology student at Conestoga College. My passion lies in web development, where I've cultivated versatile skills covering both front-end and back-end aspects.
          <br /><br />
          Proficient in JavaScript, HTML, and CSS, I bring web designs to life using frameworks like React, Bootstrap, Django and Django REST. Beyond the web, I'm well-versed in languages such as C, C++, C#, and Python, navigating Linux environments with ease.
          <br /><br />
          Git is my ally for version control, aiding me in managing repositories, tracking changes, and collaborating seamlessly with teams.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default About