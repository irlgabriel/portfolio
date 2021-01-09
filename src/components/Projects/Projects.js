import React from "react";
import { mainProjects } from "./Data";
import { MainProject, Navbar } from "..";

export default () => {
  return (
    <div>
      <Navbar />
      {
        mainProjects.map((project, index) => 
          <MainProject key={project.id} {...project} />
        )
      }
    </div>
  );
};
