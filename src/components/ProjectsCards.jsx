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
  const handleLink = (checked) => {
    console.log(checked);
    checked ? setLink(repo) : setLink(demo);
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
          <div className="projectCards-box-of-two">
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
            <div className="projectCard-skills projectCard-box-img"></div>
          </div>

          <div
            className="projectCards-box-of-two"
            id="projectCards-box-of-two-down"
          >
            <div className="projectCard-skills projectCard-img-down projectCard-box-img-down"></div>
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
