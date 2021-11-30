import { Layout, Menu } from "antd"

const AppSider = () => (
  <Layout.Sider>
    <Menu theme="dark" defaultSelectedKeys={["index"]}>
      <Menu.Item key="index">首页</Menu.Item>
    </Menu>
  </Layout.Sider>
)

export default AppSider
