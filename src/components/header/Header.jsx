import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/name222.png'
import HeaderSocials from './HeaderSocials'
import {FaAngleDoubleDown} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div id='home' className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Hoang Phuc Tran</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'><FaAngleDoubleDown/></a>
      </div>
    </header>
  )
}

export default Header