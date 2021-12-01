import { Link } from "react-router-dom"
import { Layout, Menu } from "antd"
import { ReactElement } from "react"
import { IRouteObject, routes } from "@/routes"

const AppSider = () => {
  const generateMenus = (
    _routes: IRouteObject[],
    prefix = ""
  ): ReactElement[] =>
    _routes.reduce((result: ReactElement[], route) => {
      const path = `${prefix}/${route.path ?? ""}`
      const title = route.meta?.title ?? path
      if (route.children) {
        return result.concat(
          <Menu.SubMenu key={path} title={title}>
            <Menu.Item key={`${path}/`}>
              <Link to={path}>{title}</Link>
            </Menu.Item>
            {generateMenus(route.children ?? [], path)}
          </Menu.SubMenu>
        )
      }
      return result.concat(
        <Menu.Item key={path}>
          <Link to={path}>{title}</Link>
        </Menu.Item>
      )
    }, [])

  return (
    <Layout.Sider>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["index"]}>
        {generateMenus(routes)}
      </Menu>
    </Layout.Sider>
  )
}

export default AppSider
