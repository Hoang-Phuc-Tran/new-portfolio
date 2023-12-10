import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/myPortfolio.png";
import IMG2 from "../../assets/weather.jpg";
import IMG3 from "../../assets/rsz_2todo.png";
import IMG4 from "../../assets/rsz_capture212.png";
import IMG5 from "../../assets/webchat1.png";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>My Experience</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio Website</h3>
          <div className="portfolio__item-tec">
            <div className="tec-icon tec-icon-0">
              <ImHtmlFive2 />
            </div>
            <div className="tec-icon tec-icon-1 icon-css">
              <TbBrandCss3 />
            </div>
            <div className="tec-icon tec-icon-2">
              <FaJsSquare />
            </div>
            <div className="tec-icon tec-icon-3">
              <FaReact />
            </div>
          </div>
          <p className="expanded">
            Welcome to my portfolio. I am Hoang Phuc Tran, a full-stack developer passionate about
            creating seamless web experiences. Using HTML, CSS, JavaScript, and React, I've crafted
            this space to highlight my projects and skills in contemporary web development. Browse,
            and enjoy the fusion of functionality and aesthetics.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hoang-Phuc-Tran/new-portfolio"
              className="btn btn-github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://hoangphuctran.co/"
              className="btn btn-primary btn-live"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>eCommerce Website</h3>
          <div className="portfolio__item-tec">
            <div className="tec-icon tec-icon-0">
              <ImHtmlFive2 />
            </div>
            <div className="tec-icon tec-icon-1 icon-css">
              <TbBrandCss3 />
            </div>
            <div className="tec-icon tec-icon-2">
              <FaJsSquare />
            </div>
            <div className="tec-icon tec-icon-0 icon-boot">
              <FaBootstrap />
            </div>
            <div className="tec-icon tec-icon-1">
              <SiDjango />
            </div>
          </div>
          <p className="expanded">
            Welcome to the E-Commerce Website! This project showcases a fully functional online
            shopping platform developed using HTML, CSS, JavaScript, Bootstrap, and the Django web
            framework. Experience a seamless shopping experience with this user-friendly and
            visually appealing e-commerce platform.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hoang-Phuc-Tran/Ecommerce-Project"
              className="btn btn-github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://shoppingonline.up.railway.app/"
              className="btn btn-primary btn-live"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Web Chat</h3>
          <div className="portfolio__item-tec">
            <div className="tec-icon tec-icon-0">
              <ImHtmlFive2 />
            </div>
            <div className="tec-icon tec-icon-1 icon-css">
              <TbBrandCss3 />
            </div>
            <div className="tec-icon tec-icon-2">
              <FaJsSquare />
            </div>
            <div className="tec-icon tec-icon-1 icon-css">
              <BiLogoTypescript />
            </div>
            <div className="tec-icon tec-icon-0 icon-boot icon-css">
              <TbApi />
            </div>
            <div className="tec-icon tec-icon-1">
              <SiDjango />
            </div>
          </div>
          <p className="expanded">
            Welcome to the Real-Time Chat Platform! Our application brings you closer to your
            network with instant communication, crafted meticulously using React, TypeScript,
            Django, Channels, and Django REST Framework. Engage in live conversations, enjoy a sleek
            user interface, and rely on secure, scalable backend technology.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hoang-Phuc-Tran/Full-Stack-Chat-Project"
              className="btn btn-github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" className="image-weather" />
          </div>
          <h3>To Do App</h3>
          <div className="portfolio__item-tec">
            <div className="tec-icon tec-icon-0 icon-boot">
              <FaBootstrap />
            </div>
            <div className="tec-icon tec-icon-1">
              <SiDjango />
            </div>
          </div>
          <p className="expanded">
            This task management app is built with Django and Bootstrap, which lets you easily
            manage and organize daily tasks.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hoang-Phuc-Tran/Todo_App"
              className="btn btn-github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://todo-appp.up.railway.app/"
              className="btn btn-primary btn-live"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </article>{" "}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Weather Website</h3>
          <div className="portfolio__item-tec">
            <div className="tec-icon tec-icon-0">
              <ImHtmlFive2 />
            </div>
            <div className="tec-icon tec-icon-1">
              <SiDjango />
            </div>
          </div>
          <p className="expanded">
            This web app delivers instant worldwide weather updates and forecasts using Django for a
            seamless experience.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hoang-Phuc-Tran/Weather--App"
              className="btn btn-github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://weather-appp.up.railway.app/"
              className="btn btn-primary btn-live"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
