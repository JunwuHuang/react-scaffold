import { Link } from "react-router-dom"
import { Button } from "antd"

const Home = () => (
  <>
    <main>
      <h2>Welcome to the homepage!</h2>
      <p>You can do this, I believe in you.</p>
    </main>
    <nav>
      <Link to="/about">
        <Button type="link">About</Button>
      </Link>
    </nav>
  </>
)

export default Home
