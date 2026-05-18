import React, { useState } from "react";

const App = () => {
  // Task 1
  const [name, setName] = useState("");

  // Task 2
  const [email, setEmail] = useState("");

  // Task 3
  const [password, setPassword] = useState("");

  // Task 4
  const [upperText, setUpperText] = useState("");

  // Task 5
  const [countText, setCountText] = useState("");

  // Task 6
  const [number, setNumber] = useState("");

  // Task 7
  const [reverseText, setReverseText] = useState("");

  // Task 8
  const [buttonInput, setButtonInput] = useState("");

  // Task 9
  const [typing, setTyping] = useState("");

  // Task 10
  const [displayValue, setDisplayValue] = useState("");
  const [finalValue, setFinalValue] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Input Tasks</h1>

      {/* Task 1 */}
      <h3>Task 1 - Name Input</h3>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>

      <hr />

      {/* Task 2 */}
      <h3>Task 2 - Email Input</h3>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{email === "" ? "Enter Email" : email}</p>

      <hr />

      {/* Task 3 */}
      <h3>Task 3 - Password Strength</h3>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{password.length < 6 ? "Weak" : "Strong"}</p>

      <hr />

      {/* Task 4 */}
      <h3>Task 4 - Uppercase Converter</h3>
      <input
        type="text"
        placeholder="Enter Text"
        value={upperText}
        onChange={(e) => setUpperText(e.target.value)}
      />
      <p>{upperText.toUpperCase()}</p>

      <hr />

      {/* Task 5 */}
      <h3>Task 5 - Character Count</h3>
      <input
        type="text"
        placeholder="Type Something"
        value={countText}
        onChange={(e) => setCountText(e.target.value)}
      />
      <p>Character Count: {countText.length}</p>

      <hr />

      {/* Task 6 */}
      <h3>Task 6 - Even or Odd</h3>
      <input
        type="number"
        placeholder="Enter Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>
        {number !== ""
          ? number % 2 === 0
            ? "Even"
            : "Odd"
          : ""}
      </p>

      <hr />

      {/* Task 7 */}
      <h3>Task 7 - Reverse Text</h3>
      <input
        type="text"
        placeholder="Enter Text"
        value={reverseText}
        onChange={(e) => setReverseText(e.target.value)}
      />
      <p>{reverseText.split("").reverse().join("")}</p>

      <hr />

      {/* Task 8 */}
      <h3>Task 8 - Disable Button</h3>
      <input
        type="text"
        placeholder="Enter Something"
        value={buttonInput}
        onChange={(e) => setButtonInput(e.target.value)}
      />
      <br />
      <button disabled={buttonInput === ""}>
        Submit
      </button>

      <hr />

      {/* Task 9 */}
      <h3>Task 9 - Typing Status</h3>
      <input
        type="text"
        placeholder="Start Typing"
        value={typing}
        onChange={(e) => setTyping(e.target.value)}
      />
      <p>{typing === "" ? "No Input" : "Typing..."}</p>

      <hr />

      {/* Task 10 */}
      <h3>Task 10 - Show Value on Button Click</h3>
      <input
        type="text"
        placeholder="Enter Value"
        value={displayValue}
        onChange={(e) => setDisplayValue(e.target.value)}
      />
      <br />
      <button onClick={() => setFinalValue(displayValue)}>
        Show Value
      </button>

      <p>{finalValue}</p>
    </div>
  );
};

export default App;