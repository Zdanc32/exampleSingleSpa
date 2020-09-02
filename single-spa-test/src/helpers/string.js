export function toPascal(str) {
  return str
    .replace(/\.?([A-Z]+)/g, function (x, y) {
      return "-" + y.toLowerCase();
    })
    .replace(/^-/, "");
}

export function toCamel(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
