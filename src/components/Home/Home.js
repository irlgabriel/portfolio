import React from "react"
import { Container } from "../../globalStyles"
import {
  Project,
} from "../../components";
import { ProjectOne, ProjectTwo } from "./Data";

export default function Home() {
  return(
    <>
      <Project {...ProjectOne} />
      <Project {...ProjectTwo} />
    </>
  )
}