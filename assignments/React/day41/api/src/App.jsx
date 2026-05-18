import { useEffect, useState } from "react";


const App = () => {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [savedUsers, setSavedUsers] = useState([]);

  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("registerData"));

    if (storedData) {
      setSavedUsers(storedData);
    }
  }, []);

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUsers = [...savedUsers, formData];

    setSavedUsers(updatedUsers);

    localStorage.setItem(
      "registerData",
      JSON.stringify(updatedUsers)
    );

    alert("Registered Successfully");

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const fruits = ["Apple", "Orange", "Mango", "Banana", "Grapes"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Tasks</h1>

      <h2>Fetch API Table</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Register</button>
      </form>

      <h3>Saved Users</h3>

      {savedUsers.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Password: {item.password}</p>
          <hr />
        </div>
      ))}

      <h2>Array Looping using Map</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;