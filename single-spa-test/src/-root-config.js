require("./listeners/routeChangeRequest");
require("./listeners/singleSpaAppChange");
import layoutData from "./config/layoutData";

import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(
  document.querySelector("#single-spa-layout"),
  layoutData
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);

start();
