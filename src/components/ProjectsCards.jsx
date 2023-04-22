import React from "react";

function ProjectsCards() {
  return (
    <>
      <div id="bigBox-projectsCards">
        <div className="projectCard-box-imgs">
          <div className="projectCards-box-of-two">
            <div className="projectCard-box-img">
              <img
                className="projectCard-img"
                src="https://i.postimg.cc/1Xyysx1K/project-Card4.png"
                alt="card"
              />
            </div>
            <div className="projectCard-box-img-up-second ">
              <img
                className="projectCard-img"
                src="https://i.postimg.cc/qBWGbk0n/project-Card2.png"
                alt="card"
              />
            </div>
            <div className="projectCard-skills projectCard-box-img"></div>
          </div>

          <div
            className="projectCards-box-of-two"
            id="projectCards-box-of-two-down"
          >
            <div className="projectCard-skills projectCard-img-down projectCard-box-img-down"></div>
            <div className="projectCard-box-img-down projectCard-img-down">
              <img
                className="projectCard-img"
                src="https://i.postimg.cc/1tkNH363/project-Card3.png"
                alt="card"
              />
            </div>
            <div className="projectCard-box-img-down projectCard-img-down">
              <img
                className="projectCard-img"
                src="https://i.postimg.cc/cHMDq2mZ/project-Card1.png"
                alt="card"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsCards;
