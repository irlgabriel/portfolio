import React, { useState, useEffect } from "react";
import { mainProjects } from "./Data";
import { MainProject } from "..";

export default ({slide, setSlide}) => {
  const slides = mainProjects.length;
  const [styles, setStyles] = useState({transform: `translate(0px, 0%)`});

  var prevTime = new Date().getTime();
  const handleScroll = (e) => {
    // Check for kinetic scroll first
    var curTime = new Date().getTime();
    if (typeof prevTime !== "undefined") {
      var timeDiff = curTime - prevTime;
      if (timeDiff > 100) {
        if (e.deltaY > 0) {
          if (slide !== slides - 1) {
            setSlide((slide) => slide + 1);
            setStyles({transform: `translate(0px, ${(slide + 1) * -100/7}%)`})
          }
        }
        if (e.deltaY < 0) {
          if (slide !== 0) {
            setSlide((slide) => slide - 1);
            setStyles({transform: `translate(0px, ${(slide - 1) * -100/7}%)`})
          }
        }
      }
    }
    prevTime = curTime;
  };
  useEffect(() => {
    if(slide >= 0 && slide < mainProjects.length) {
      setStyles({transform: `translate(0px, ${(slide) * -100/7}%)`})
    }
  }, [slide])
  return (

      <div style={styles} id="projects-slider" onWheel={handleScroll}>
        
        {
          mainProjects.map((project, index) => 
            <MainProject key={project.id} {...project} />
          )
        }
      </div>
  );
};

/*
<div className="projects-sidebar">
  {
    mainProjects.map(project => 
      <div className="project-sidebar-item" data-id={project.id}></div>  
    )
  }
</div>
*/