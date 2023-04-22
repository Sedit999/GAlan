import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectsStart() {
  const navigate = useNavigate();
  const handleProjects = (e) => {
    e.preventDefault();
    navigate("/projects");
  };
  return (
    <>
      <div id="bigBox-start-btn">
        <img
          id="start-btn-img"
          src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90aa217b6b6d46d.png"
          alt="start"
          onClick={(e) => {
            handleProjects(e);
          }}
        />
      </div>
    </>
  );
}

export default ProjectsStart;
