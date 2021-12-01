import { useRecoilState } from "recoil"
import { Link } from "react-router-dom"
import { Button } from "antd"
import { countState } from "@/store"

const Home = () => {
  const [count, setCount] = useRecoilState(countState)
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        {count}
        <Link to="/about">
          <Button type="link">About</Button>
        </Link>
        <Button onClick={() => setCount((c) => c + 1)}>count + 1</Button>
      </nav>
    </>
  )
}

export default Home
