import { Routes, Route, Link } from "react-router-dom"
import { Button } from "antd"
import { AppLayout } from "@/layouts"

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
      </nav>
    </>
  )
}

const App = () => (
  <AppLayout>
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  </AppLayout>
)

export default App
