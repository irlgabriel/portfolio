import React from "react"
import {
  Project,
} from "../../components";
import {
  Intro,
  Heading,
  ProjectsDiv
} from "./Home.components"
import { ProjectOne, ProjectTwo, ProjectThree, ProjectFour, ProjectFive } from "./Data";

export default function Home() {
  return(
    <>
      <Intro>
        <Heading>Projects Overview</Heading>
      </Intro>
      <Project {...ProjectOne} />
      <Project {...ProjectTwo} />
      <Project {...ProjectThree} />
      <Project {...ProjectFour} />
      <Project {...ProjectFive} />
    </>
  )
}