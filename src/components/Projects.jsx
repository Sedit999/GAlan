import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div id="bigBox-projects">
        <h2 id="projects-title">Proyectos</h2>
        <div id="projects">
          <div id="projects-first-block" className="projects-blockOfTwo">
            <div className="projects-card">
              <h3 className="projects-title">Landing Page</h3>
              <div className="projects-demo">
                <Link
                  className="projects-link-demo"
                  to="https://sedit999.github.io/Landing/"
                  target="_blank"
                >
                  <img
                    src="https://i.postimg.cc/T2Jqn5vF/image.png"
                    alt="landing"
                    className="projects-link-demo-img"
                  />
                  <p className="projects-demo-txt">Ver demo</p>
                </Link>
              </div>
              <div className="projects-repo">
                <Link to="https://github.com/Sedit999/Landing" target="_blank">
                  <p className="projects-repo-txt">Ver Repositorio</p>
                </Link>
              </div>
            </div>

            <div className="projects-card">
              <h3 className="projects-title">Market List</h3>
              <div className="projects-demo">
                <Link
                  className="projects-link-demo"
                  to="https://sedit999.github.io/CRUD/"
                  target="_blank"
                >
                  <img
                    src="https://i.postimg.cc/gkQBw6WR/image.png"
                    alt="marketList"
                    className="projects-link-demo-img"
                  />
                  <p className="projects-demo-txt">Ver demo</p>
                </Link>
              </div>
              <div className="projects-repo">
                <Link to="https://github.com/Sedit999/CRUD" target="_blank">
                  <p className="projects-repo-txt">Ver Repositorio</p>
                </Link>
              </div>
            </div>
          </div>

          <div id="projects-second-block" className="projects-blockOfTwo">
            <div className="projects-card">
              <h3 className="projects-title">Weather</h3>
              <div className="projects-demo">
                <Link
                  className="projects-link-demo"
                  to="https://sedit999.github.io/DASHBOARD-clima/"
                  target="_blank"
                >
                  <img
                    src="https://i.postimg.cc/L81Rh1Jg/image.png"
                    alt="weather"
                    className="projects-link-demo-img"
                  />
                  <p className="projects-demo-txt">Ver demo</p>
                </Link>
              </div>
              <div className="projects-repo">
                <Link
                  to="https://github.com/Sedit999/DASHBOARD-clima"
                  target="_blank"
                >
                  <p className="projects-repo-txt">Ver Repositorio</p>
                </Link>
              </div>
            </div>

            <div className="projects-card">
              <h3 className="projects-title">Ecommerce</h3>
              <div className="projects-demo">
                <Link
                  className="projects-link-demo"
                  to="https://gorgeous-arithmetic-e06a1b.netlify.app"
                  target="_blank"
                >
                  <img
                    src="https://i.postimg.cc/nLmPvKxB/image.png"
                    alt="ecommerce"
                    className="projects-link-demo-img"
                  />
                  <p className="projects-demo-txt">Ver demo</p>
                </Link>
              </div>
              <div className="projects-repo">
                <Link
                  to="https://github.com/Sedit999/Frontend-Ecommerce-videogames"
                  target="_blank"
                >
                  <p className="projects-repo-txt">Ver Repositorio front</p>
                </Link>
                <Link
                  to="https://github.com/Sedit999/Backend-Ecommerce-videogames"
                  target="_blank"
                >
                  <p className="projects-repo-txt">Ver Repositorio back</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
