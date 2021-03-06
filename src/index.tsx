import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { ConfigProvider } from "antd"
import "antd/dist/antd.variable.min.css"
import "@/styles/index.less"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <RecoilRoot>
    <ConfigProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </RecoilRoot>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
