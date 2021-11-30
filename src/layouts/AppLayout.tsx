import { FC } from "react"
import { Layout, PageHeader } from "antd"
import AppHeader from "./AppHeader"
import AppSider from "./AppSider"
import AppFooter from "./AppFooter"
import styles from "./index.module.less"

const { Content } = Layout

const AppLayout: FC = ({ children }) => (
  <Layout className={styles.layout}>
    <AppHeader />
    <Layout>
      <AppSider />
      <Content>
        <PageHeader
          ghost={false}
          title="首页"
          breadcrumb={{
            routes: [
              {
                path: "/",
                breadcrumbName: "首页",
              },
            ],
          }}
        />
        <Content className={styles.content}>{children}</Content>
        <AppFooter />
      </Content>
    </Layout>
  </Layout>
)

export default AppLayout
