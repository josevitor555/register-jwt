import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-container">
      <h1> Welcome! </h1>
      <div className="home-buttons">
        <Link to="/login"> <button> Login </button> </Link>
        <Link to="/register"> <button> Register </button> </Link>
      </div>
    </div>
  )
}

export default Home;
