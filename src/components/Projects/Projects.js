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
            setSlide(slide + 1);
            setAnimating(true);
          }
        } 
        if(e.deltaY < 0) {
          if(slide !== 0) {
            setSlide(slide - 1);
            setAnimating(true);
          }
        }
      }
    }
    prevTime = curTime;
  }
  return (
    <div className="mx-2 my-2 overflow-hidden" onWheel={handleScroll}>
      <CSSTransition 
        in={animating}
        classNames="section-scroll"
        addEndListener={(node) => {
          // use the css transitionend event to mark the finish of a transition
          node.addEventListener('transitionend', () => {setAnimating(false)}, false);
        }}
      >
        <div className="section-scroll">
          <MainProject {...mainProjects[slide]} />
        </div>
      </CSSTransition>
    </div>
  );
};
