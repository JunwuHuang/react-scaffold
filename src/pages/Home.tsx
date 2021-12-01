import { useRecoilState } from "recoil"
import { Link } from "react-router-dom"
import { Button } from "antd"
import { countState } from "@/store"

const Home = () => {
  const [count, setCount] = useRecoilState(countState)
  return (
    <>
      <main style={{ height: "110vh" }}>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <h3>{count}</h3>
        <Button onClick={() => setCount((c) => c + 1)}>count + 1</Button>
      </main>
      <nav>
        <Link to="/about">
          <Button type="link">About</Button>
        </Link>
      </nav>
    </>
  )
}

export default Home
