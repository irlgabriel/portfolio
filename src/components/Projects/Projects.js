import React, { useState } from "react";
import { mainProjects } from "./Data";
import { MainProject } from "..";
import { Row, Col } from "reactstrap";
import { CSSTransition } from "react-transition-group";


export default () => {
  const slides = mainProjects.length;
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleScroll = (e) => {
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
  return (
    <div onWheel={handleScroll}>
      <CSSTransition 
        in={animating}
        classNames="section-scroll"
        timeout={700}
      >
        <div className="section-scroll">
          <MainProject setParentAnimating={setAnimating} {...mainProjects[slide]} />
        </div>
      </CSSTransition>
    </div>
  );
};
