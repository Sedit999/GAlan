import React from "react";
import { Outlet } from "react-router-dom";

function Projects() {
  return (
    <>
      <div id="bigBox-projects">
        <h2 id="projects-title">Proyectos</h2>
        <div>
          <Outlet />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Projects;
