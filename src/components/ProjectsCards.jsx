import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";

function ProjectsCards() {
  const repo = [
    "https://github.com/Sedit999/Landing",
    "https://github.com/Sedit999/DASHBOARD-clima",
    "https://github.com/Sedit999/CRUD",
    "https://github.com/Sedit999/Frontend-Ecommerce-videogames",
  ];
  const demo = [
    "https://sedit999.github.io/Landing/",
    "https://sedit999.github.io/DASHBOARD-clima/",
    "https://sedit999.github.io/CRUD/",
    "https://gorgeous-arithmetic-e06a1b.netlify.app",
  ];
  const [link, setLink] = useState(demo);
  const [route, setRoute] = useState("Aplicación web");
  const handleLink = (checked) => {
    console.log(checked);
    checked ? setLink(repo) : setLink(demo);
    checked ? setRoute("Repositorio") : setRoute("Aplicación web");
  };

  return (
    <>
      <div id="bigBox-projectsCards">
        <div className="projectCard-box-imgs">
          <Switch
            checkedChildren="repo"
            unCheckedChildren="demo"
            onChange={handleLink}
          ></Switch>
          <div className="projectCards-box-of-two inverse">
            <div className="projectCard-box-img">
              <Link to={link[0]} target="_blank">
                <img
                  className="projectCard-img"
                  src="https://i.postimg.cc/1Xyysx1K/project-Card4.png"
                  alt="card"
                />
              </Link>
            </div>
            <div className="projectCard-box-img-up-second ">
              <Link to={link[1]} target="_blank">
                <img
                  className="projectCard-img"
                  src="https://i.postimg.cc/qBWGbk0n/project-Card2.png"
                  alt="card"
                />
              </Link>
            </div>
            <div className="projectCard-skills projectCard-box-img">
              <div className="projectCard-skills-txt">Link activo para: </div>
              <div className="projectCard-skills-txt">{route}</div>
            </div>
          </div>

          <div
            className="projectCards-box-of-two"
            id="projectCards-box-of-two-down"
          >
            <div
              className="projectCard-skills 
            projectCard-skills-list projectCard-img-down projectCard-box-img-down"
            >
              <div>
                <div>softSkills:</div>
                <div className="projectCard-skills-list-maring ">
                  - Cooperación en equipo
                </div>
                <div>- Liderazgo</div>
                <div>- Autodidacta</div>
                <div>- Adaptación al cambio</div>
                <div>- Asertividad</div>
                <div>- Mentalidad ágil</div>
            
              </div>
              <div>
                <div>hardSkills:</div>
                <div className="projectCard-skills-list-maring ">
                  - React.js
                </div>
                <div>- JavaScript</div>
                <div>- CSS</div>
                <div>- MongoDB</div>
                <div>- Firebase</div>
                <div>- HTML5</div>
                <div>- Ant Design</div>
                <div>- Git</div>
              </div>
            </div>
            <div className="projectCard-box-img-down projectCard-img-down">
              <Link to={link[2]} target="_blank">
                <img
                  className="projectCard-img"
                  src="https://i.postimg.cc/1tkNH363/project-Card3.png"
                  alt="card"
                />
              </Link>
            </div>
            <div className="projectCard-box-img-down projectCard-img-down">
              <Link to={link[3]} target="_blank">
                <img
                  className="projectCard-img"
                  src="https://i.postimg.cc/cHMDq2mZ/project-Card1.png"
                  alt="card"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsCards;
