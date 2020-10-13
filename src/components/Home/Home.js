import React from "react"
import {
  Project,
} from "../../components";
import {
  Intro,
  Heading,
  
} from "./Home.components"
import { projects } from "./Data";

export default function Home() {
  return(
    <>
      <Intro>
        <Heading>Projects Overview</Heading>
      </Intro>
      {
        projects.map(project => <Project {...project} key={project.key}  />)
      }
    </>
  )
}