import { FC } from "react"
import { Link, useLocation } from "react-router-dom"
import { Breadcrumb } from "antd"
import { IRouteObject, routes } from "@/routes"
import { AppBreadcrumbProps } from "./types"

const { Item } = Breadcrumb

const generateBreadCrumbsMap = (
  _routes: IRouteObject[],
  prefix = ""
): Record<string, string> =>
  _routes.reduce((map: Record<string, string>, route) => {
    const currentPath = `${prefix}/${route.path ?? ""}`
    return {
      ...map,
      [currentPath]: String(route.meta?.title ?? ""),
      ...generateBreadCrumbsMap(route.children ?? [], currentPath),
    }
  }, {})

const breadcrumbNameMap = generateBreadCrumbsMap(routes)

const AppBreadcrumb: FC<AppBreadcrumbProps> = () => {
  const location = useLocation()
  const pathSnippets = location.pathname.split("/").filter((i) => i)

  const extraBreadcrumbItems = pathSnippets.map((_, i) => {
    const url = `/${pathSnippets.slice(0, i + 1).join("/")}`
    return (
      <Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Item>
    )
  })

  return (
    <Breadcrumb>
      {[
        <Item key="/">
          <Link to="/">{breadcrumbNameMap["/"]}</Link>
        </Item>,
      ].concat(extraBreadcrumbItems)}
    </Breadcrumb>
  )
}

export default AppBreadcrumb
