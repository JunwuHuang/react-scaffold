import { FC } from "react"
import { Layout, BackTop } from "antd"
import AppHeader from "./AppHeader"
import AppSider from "./AppSider"
import AppFooter from "./AppFooter"
import AppPageHeader from "./AppPageHeader"
import styles from "./index.module.less"

const { Content } = Layout

const AppLayout: FC = ({ children }) => (
  <Layout className={styles.layout}>
    <AppHeader />
    <Layout>
      <AppSider />
      <Content>
        <AppPageHeader />
        <Content className={styles.content}>{children}</Content>
        <AppFooter />
        <BackTop />
      </Content>
    </Layout>
  </Layout>
)

export default AppLayout
