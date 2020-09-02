import { toCamel } from "../helpers/string";
import selectRoute from "../functions/selectRoute";

window.addEventListener("single-spa:app-change", () => {
  const pathNameParts = location.pathname.split("/");
  const project = toCamel(pathNameParts[1]);

  pathNameParts.splice(0, 2);
  const path = "/" + pathNameParts.join("/");

  let params = new URLSearchParams(location.search);
  const data = [];
  for (let p of params) {
    data[p[0]] = p[1];
  }

  selectRoute(project, path, data);
});
