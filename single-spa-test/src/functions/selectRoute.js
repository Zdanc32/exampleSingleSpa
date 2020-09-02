import { toPascal } from "../helpers/string";
import routeChangeEvent from "../events/routeChangeEvent";
import routes from "../routes";

export default function (projectName, path, data) {
  const projectRoutes = routes[projectName] ?? routes["others"];

  const nextRoute = projectRoutes
    .filter((el) => {
      return el.path === path;
    })
    .shift();
  const nextPath = nextRoute ? nextRoute.path : "";

  let queryString = data
    ? Object.keys(data)
        .map((key) => key + "=" + data[key])
        .join("&")
    : "";
  queryString = queryString ? "?" + queryString : location.search;

  const nextUrl = "/" + toPascal(projectName) + nextPath;

  if (nextUrl !== location.pathname || queryString !== location.search) {
    history.pushState(null, nextUrl + queryString, nextUrl + queryString);
  }
  routeChangeEvent(projectName, nextRoute, data);
}
