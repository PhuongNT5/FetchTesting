import { Route } from "react-router-dom";
import HomePage from "./HomePage";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    type: Route,
    path: ["/"],
    component: HomePage,
    state: "homePage",
    exact: true
  }
];
