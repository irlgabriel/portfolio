import { Intro, Me, Projects } from "./components";

export const routes = [
  { path: "/", name: "Intro", Component: Intro },
  { path: "/who", name: "Who", Component: Me },
  { path: "/what", name: "What", Component: Projects },
];
