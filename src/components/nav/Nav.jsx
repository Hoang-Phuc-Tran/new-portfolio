import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillChatTextFill } from 'react-icons/bs';
import { PiSuitcaseSimpleDuotone } from 'react-icons/pi';
import { FaUnlockAlt } from 'react-icons/fa';

const Nav = () => {
  const [active, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const home = document.querySelector('#home');
      const about = document.querySelector('#about');
      const experience = document.querySelector('#experience');
      const portfolio = document.querySelector('#portfolio');
      const contact = document.querySelector('#contact');

      const sections = [home, about, experience, portfolio, contact];
      const scrollPosition = window.scrollY + 80; // Adjust this offset as needed

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveNav(`#${section.id}`);
            break;
          }
        }
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();

    // Calculate the offset value based on the height of the fixed navigation bar
    const offset = -100; // Adjust this value as needed

    const home = document.querySelector('#home');
    if (home) {
      const homeTop = home.offsetTop;
      const scrollToPosition = homeTop + offset;

      // Ensure the scroll position is not less than 0
      const finalScrollPosition = Math.max(scrollToPosition, 0);

      window.scrollTo({ top: finalScrollPosition, behavior: 'smooth' });
    }
    setActiveNav('#home');
  };

  return (
    <nav>
      <a href="#home" onClick={handleHomeClick} className={active === '#home' ? 'active' : ''}>
        <AiFillHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={active === '#about' ? 'active' : ''}>
        <BsFillPersonFill />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={active === '#experience' ? 'active' : ''}
      >
        <PiSuitcaseSimpleDuotone />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={active === '#portfolio' ? 'active' : ''}
      >
        <FaUnlockAlt />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={active === '#contact' ? 'active' : ''}
      >
        <BsFillChatTextFill />
      </a>
    </nav>
  );
};

export default Nav;
