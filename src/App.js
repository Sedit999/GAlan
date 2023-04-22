import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ProjectsCards from "./components/ProjectsCards";
import ContactMe from "./components/ContactMe";
import ProjectsStart from "./components/ProjectsStart";

function App() {
  return (
    <>
      <AboutMe />
      <Routes>
        <Route path="/" element={<Projects />}>
          <Route index element={<ProjectsStart />} />
          <Route path="/projects" element={<ProjectsCards />} />
        </Route>
      </Routes>
      <ContactMe />
    </>
  );
}

export default App;
