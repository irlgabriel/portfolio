import React from "react";
import { mainProjects } from "./Data";
import { MainProject, Navbar } from "..";

export default ({props}) => {
  return (
    <div>
      <Navbar {...props}/>
      {
        mainProjects.map((project, index) => 
          <MainProject key={project.id} {...project} />
        )
      }
    </div>
  );
};
