import React from "react";
import "./experience.css";
import { TbShieldCheckeredFilled } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* Languages */}
        <div className="experience__backend">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">C/C++</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">C#</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">TypeScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">Python</h4>
              </div>
            </article>
          </div>
        </div>
        {/*  Backend Development */}
        <div className="experience__language">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">Django</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon" />
              <div>
                <h4 className="sub-heading">SQLite</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbShieldCheckeredFilled className="experience__details-icon icon-rest" />
              <div>
                <h4 className="sub-heading">RESTful API</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
