import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BackgroundImage, ProjectContainer } from "./SmallProject.components";
import { Row, Col } from "reactstrap";

export const SmallProject = ({img, name, liveURL, codeURL}) => {
  const [showOverlay, setOverlay] = useState(false);
  return (
    <ProjectContainer styles={{boxShadow: '0px 0px 5px 3px rgba(0,0,0,0.75)'}} onMouseEnter={() => setOverlay(true)} onMouseLeave={() => setOverlay(false)}>
      <BackgroundImage img={img}/>
      <CSSTransition
        in={showOverlay}
        timeout={500}
        classNames="fade2"
        unmountOnExit
      >
        <div style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0"}}>
          <h5 style={{cursor: "default"}}>{name}</h5>
          <Row className="smallproject-row px-1" noGutters>
            <a href={liveURL}>Live</a>
            <a href={codeURL}>Code</a>
          </Row>
          <div style={{zIndex: "-1"}} className="image-overlay"></div>
        </div>
      </CSSTransition>
    </ProjectContainer>
  )
}