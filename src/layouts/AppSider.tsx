import { ReactElement, useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { Layout, Menu } from "antd"
import { IRouteObject, routes } from "@/routes"

const AppSider = () => {
  const { pathname } = useLocation()
  const [openKeys, setOpenKeys] = useState<string[]>([])

  useEffect(() => {
    const pathSnippets = pathname.split("/").filter((i) => i)
    setOpenKeys(
      pathSnippets.map((item, index) => {
        let result = `/${item}/`
        for (let i = index; i > 0; i -= 1) {
          result = `/${pathSnippets[i]}${result}`
        }
        return result
      })
    )
  }, [pathname])

  const generateMenus = (
    _routes: IRouteObject[],
    prefix = ""
  ): ReactElement[] =>
    _routes.reduce((result: ReactElement[], route) => {
      const path = `${prefix}/${route.path ?? ""}`
      const title = route.meta?.title ?? path
      const item = (
        <Menu.Item key={path}>
          <Link to={path}>{title}</Link>
        </Menu.Item>
      )
      if (route.children) {
        return result.concat(
          <Menu.SubMenu key={`${path}/`} title={title}>
            {item}
            {generateMenus(route.children ?? [], path)}
          </Menu.SubMenu>
        )
      }
      return result.concat(item)
    }, [])

  return (
    <Layout.Sider>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={[pathname]}
        onOpenChange={(_openKeys: string[]) => {
          setOpenKeys(_openKeys)
        }}
      >
        {generateMenus(routes)}
      </Menu>
    </Layout.Sider>
  )
}

export default AppSider
