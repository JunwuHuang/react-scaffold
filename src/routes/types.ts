import { RouteObject } from "react-router-dom"

export interface IRouteObject extends RouteObject {
  meta?: Record<string, string | number | boolean>
  children?: IRouteObject[]
}
