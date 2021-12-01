import { PageHeader } from "antd"
import AppBreadcrumb from "./AppBreadcrumb"

const AppPageHeader = () => {
  const breadcrumbRender = () => <AppBreadcrumb />
  return (
    <PageHeader
      ghost={false}
      title="首页"
      breadcrumbRender={breadcrumbRender}
    />
  )
}

export default AppPageHeader
