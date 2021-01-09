import React from "react";
import { mainProjects } from "./Data";
import { MainProject } from "..";

export default () => {
  return (
    <div>
      {
        mainProjects.map((project, index) => 
          <MainProject key={project.id} {...project} />
        )
      }
    </div>
  );
};
