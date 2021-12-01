import { FC } from "react"
import { Navigate } from "react-router-dom"

const RequireAuth: FC = ({ children }): any => {
  if (!children) {
    return <Navigate to="/" />
  }
  return children
}

export default RequireAuth
