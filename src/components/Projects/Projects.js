import React, { useState } from "react";
import { mainProjects } from "./Data";
import { MainProject } from "..";
import { CSSTransition } from "react-transition-group";


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
      <CSSTransition 
        in={animating}
        classNames="section-scroll"
        timeout={1200}
        addEndListener={(node) => {
          // use the css transitionend event to mark the finish of a transition
          node.addEventListener('transitionend', () => {setAnimating(false)}, false);
        }}
      >
        <div>
          <MainProject className="section-scroll" {...mainProjects[slide]} />
        </div>
      </CSSTransition>
    </div>
  );
};
