import React, { useState } from "react";
import { mainProjects } from "./Data";
import { MainProject } from "..";
import { CSSTransition } from "react-transition-group";
import { Row, Col } from "reactstrap";


export default () => {
  const slides = mainProjects.length;
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  var prevTime = new Date().getTime();
  const handleScroll = (e) => {
    // Check for kinetic scroll first
    var curTime = new Date().getTime();
    if(typeof prevTime !== 'undefined'){
      var timeDiff = curTime - prevTime;
      if(timeDiff > 100) {
        if(animating) return;
        if(e.deltaY > 0) {
          if(slide !== slides - 1) {
            setAnimating(true);
            setSlide(slide + 1);  
          }
        } 
        if(e.deltaY < 0) {
          if(slide !== 0) {
            setAnimating(true);
            setSlide(slide - 1);
          }
        }
      }
    }
    prevTime = curTime;
  }
  return (
    <div className="mx-2 my-2 p-relative" onWheel={handleScroll}>
      <div>
      <CSSTransition 
      in={animating}
      classNames="section-scroll"
      timeout={600}
      onEntered={() => setAnimating(false)}
      >
        <div className="projects-carousel section-scroll">
          <MainProject {...mainProjects[slide]} />
        </div>
      </CSSTransition>
        <div className="carousel-bubbles">
          {mainProjects.map((p, index) =>
            <div onClick={() => setSlide(index)} className={`bubble ${mainProjects[slide].id === p.id ? "checked-bubble" : ""}`} data-id={p.id}></div>  
          )}
        </div>
      </div>      
    </div>
  );
};
