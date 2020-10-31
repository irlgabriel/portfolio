import React, { useState } from "react";
import { mainProjects } from "./Data";
import { MainProject } from "..";

export default () => {
  const slides = mainProjects.length;
  const [slide, setSlide] = useState(0);
  const [styles, setStyles] = useState({});
  const [scrollUp, setScroll] = useState(false);

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
            setSlide(slide + 1);
            setStyles({translateX: - slide * 100/slides})
          }
        }
        if (e.deltaY < 0) {
          setScroll(false);
          if (slide !== 0) {
            setSlide(slide - 1);
            setStyles({translateX: - slide * 100/slides})
          }
        }
      }
    }
    prevTime = curTime;
  };
  return (
    <div style={{transform: `translate: (${- (slide * 100/7)}px, 0px)`}} id="projects-slider">
      {
        mainProjects.map(project => 
          <MainProject key={project.id} {...project} />
      )
      }
    </div>
  );
};
