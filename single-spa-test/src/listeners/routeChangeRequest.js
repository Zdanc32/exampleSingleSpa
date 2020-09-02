import selectRoute from "../functions/selectRoute";

window.addEventListener("sots:route-change-request", (ev) => {
  selectRoute(ev.detail.project, ev.detail.path, ev.detail.data);
});
