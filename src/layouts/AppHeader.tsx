import { Layout } from "antd"
import LogoSvg from "@/assets/logo.svg"
import styles from "./index.module.less"

const AppHeader = () => (
  <Layout.Header className={styles.header}>
    <img src={LogoSvg} alt="logo" />
  </Layout.Header>
)

export default AppHeader
