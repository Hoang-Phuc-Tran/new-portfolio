import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/weather.jpg";
import IMG3 from "../../assets/Logo_Budget.jpg";
import IMG4 from "../../assets/rsz_capture212.png";
import IMG5 from "../../assets/webchat1.png";
import IMG6 from "../../assets/campus.png";
import IMG7 from "../../assets/voip.png";
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
            <img src={IMG3} alt="" />
          </div>
          <h3>Budget Cloud</h3>
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
            <div className="tec-icon tec-icon-1">
              <SiDjango />
            </div>
          </div>
          <p className="expanded">
            Discover BudgetCloud, created by Conestoga students to simplify cloud service selection
            with immediate price comparisons across AWS, Azure, GCP, and Oracle. Our platform
            ensures easy navigation and tailored, cost-effective solutions, helping you make
            informed decisions through a user-friendly interface.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/bjasim/cloud-calculator"
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
            Welcome to our Real-Time Chat Platform, meticulously crafted with React, TypeScript,
            Django, Channels, and Django REST Framework. This application brings you closer to your
            network through instant communication, featuring a sleek user interface and relying on
            secure, scalable backend technology.
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
            <a
              href="https://hoang-phuc-tran.github.io/Frontend-WebChat/"
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
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>VoIP Telephony Service Network</h3>
          <div className="portfolio__item-tec"></div>
          <p className="expanded">
            Designed and implemented a scalable VoIP-enabled network for a newly acquired branch of
            Turtle Consultancy Limited, supporting seamless communication across departments using
            VLANs, dynamic IP allocation, OSPF routing, and secure remote access via SSH.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hoang-Phuc-Tran/VoIP-Telephony-Service-Network-Design"
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
            <img src={IMG6} alt="" className="img06" />
          </div>
          <h3>Campus Network</h3>
          <div className="portfolio__item-tec"></div>
          <p className="expanded">
            Designed a robust network topology for a large university with two campuses,
            implementing VLANs, RIPv2 routing, dynamic IP allocation, and SSH for secure remote
            access to ensure seamless communication and efficient resource management across
            faculties and departments.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hoang-Phuc-Tran/Campus-Network"
              className="btn btn-github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
