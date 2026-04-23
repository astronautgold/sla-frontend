import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/assignment36">
        Go to Assignment 36
      </Link>
    </div>
  );
};

export default Home;