import React from "react"
import {
  Project,
} from "../../components";
import {
  Intro,
  Heading,
  
} from "./Home.components"
import { ProjectOne, ProjectTwo, ProjectThree, ProjectFour, ProjectFive } from "./Data";

export default function Home() {
  return(
    <>
      <Intro>
        <Heading>Some of my projects</Heading>
      </Intro>
      <Project {...ProjectOne} />
      <Project {...ProjectTwo} />
      <Project {...ProjectThree} />
      <Project {...ProjectFour} />
      <Project {...ProjectFive} />
    </>
  )
}