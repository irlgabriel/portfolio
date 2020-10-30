import React, { useState } from "react";
import { mainProjects } from "./Data";
import { MainProject } from "..";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Row, Col } from "reactstrap";

export default () => {
  const slides = mainProjects.length;
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [scrollUp, setScroll] = useState(false);

  var prevTime = new Date().getTime();
  const handleScroll = (e) => {
    // Check for kinetic scroll first
    var curTime = new Date().getTime();
    if (typeof prevTime !== "undefined") {
      var timeDiff = curTime - prevTime;
      if (timeDiff > 100) {
        if (animating) return;
        if (e.deltaY > 0) {
          setScroll(true);
          if (slide !== slides - 1) {
            setAnimating(true);
            setTimeout(() => {
              setSlide(slide + 1);
            }, 300);
          }
        }
        if (e.deltaY < 0) {
          setScroll(false);
          if (slide !== 0) {
            setAnimating(true);
            setTimeout(() => {
              setSlide(slide - 1);
            }, 300);
          }
        }
      }
    }
    prevTime = curTime;
  };
  return (
    <div className="project-container" onWheel={handleScroll}>
      <CSSTransition
        in={animating}
        classNames={`${
          scrollUp ? "section-scroll" : "section-scroll-inverse"
        }`}
        timeout={600}
        onEntered={() => setAnimating(false)}
      >
        <div className="projects-carousel">
          <MainProject {...mainProjects[slide]} />
        </div>
      </CSSTransition>
      <div className="carousel-bubbles">
        {mainProjects.map((p, index) => (
          <div
            onClick={() => {
              if(slide !== index && !animating) {
                setAnimating(true);
                index < slide ? setScroll(false) : setScroll(true)
                setTimeout(() => setSlide(index), 300)
              }
            }}
            className={`bubble ${
              mainProjects[slide].id === p.id ? "checked-bubble" : ""
            }`}
            data-id={p.id}
          ></div>
        ))}
      </div>
  </div>
  );
};
