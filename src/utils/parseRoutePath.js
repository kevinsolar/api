export function parseRoutePath(path) {
  const routeParamsRegex = /:([a-zA-Z]+)/g

  const params = path.replaceAll(routeParamsRegex, "(?<$1>[a-z0-9-_]+)")

  const pathRegex = new RegExp(params)

  return pathRegex
}