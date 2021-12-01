import { Link, Outlet } from "react-router-dom"
import { Button } from "antd"

const About = () => {
  const words = "That feels like an existential question, don't you think?"
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>{words}</p>
      </main>
      <nav>
        <Link to="/">
          <Button type="link">Home</Button>
        </Link>
        <Link to="about">
          <Button type="link">aaabout</Button>
        </Link>
      </nav>
      <Outlet />
    </>
  )
}

export default About
