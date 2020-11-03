import React, { useState } from "react";
import { mainProjects } from "./Data";
import { MainProject } from "..";

export default () => {
  const slides = mainProjects.length;
  const [slide, setSlide] = useState(0);
  const [styles, setStyles] = useState({transform: `translate(0px, 0%)`});
  const [scrollUp, setScroll] = useState(true);

  var prevTime = new Date().getTime();
  const handleScroll = (e) => {
    // Check for kinetic scroll first
    var curTime = new Date().getTime();
    if (typeof prevTime !== "undefined") {
      var timeDiff = curTime - prevTime;
      if (timeDiff > 100) {
        if (e.deltaY > 0) {
          setScroll(true);
          if (slide !== slides - 1) {
            setSlide((slide) => slide + 1);
            setStyles({transform: `translate(0px, ${(slide + 1) * -100/7}%)`})
          }
        }
        if (e.deltaY < 0) {
          setScroll(false);
          if (slide !== 0) {
            setSlide((slide) => slide - 1);
            setStyles({transform: `translate(0px, ${(slide - 1) * -100/7}%)`})
          }
        }
      }
    }
    prevTime = curTime;
  };
  return (

      <div style={styles} id="projects-slider" onWheel={handleScroll}>
        
        {
          mainProjects.map(project => 
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