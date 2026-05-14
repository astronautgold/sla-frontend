import { useState } from "react";

const Toggleloginlogout = () => {
  const [isLoggedin, setIsloggedin] = useState(true);

  return (
    <div>
      <h1>{isLoggedin ? "Welcome user!" : "Please log in"}</h1>

      <button onClick={() => setIsloggedin(!isLoggedin)}>
        {isLoggedin ? "Logout" : "Log in"}
      </button>
    </div>
  );
};

export default Toggleloginlogout;