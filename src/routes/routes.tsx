import Home from "@/pages/Home"
import About from "@/pages/About"
import { IRouteObject } from "./types"

const routes: IRouteObject[] = [
  {
    index: true,
    element: <Home />,
    meta: {
      title: "首页",
    },
  },
  {
    path: "about",
    element: <About />,
    meta: {
      title: "关于",
    },
    children: [
      {
        path: "about",
        element: <About />,
        meta: {
          title: "about",
        },
      },
    ],
  },
]

export default routes
