export function parseRoutePath(path) {
  const routeParamsRegex = /:([a-zA-Z]+)/g

  const params = path.replaceAll(routeParamsRegex, "(?<$1>[a-z0-9-_]+)")

  // para aproveitar o regex path, vamos fazer o grupo de query tambem.
  const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)

  return pathRegex
}