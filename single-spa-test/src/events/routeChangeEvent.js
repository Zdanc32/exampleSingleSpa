export default function (project, nextRoute, data) {
  const event = new CustomEvent("sots:route-change-command", {
    detail: {
      project: project,
      nextRoute: nextRoute,
      data: data,
    },
  });
  dispatchEvent(event);
}
