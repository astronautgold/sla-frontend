import React, { useEffect, useRef, useState } from "react";

const App = () => {

  // 1. Input Focus
  const inputFocusRef = useRef();

  // 2. Get Input Value
  const inputValueRef = useRef();

  // 3. Clear Input
  const clearInputRef = useRef();

  // 4. Previous Value Track
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  // 5. Timer Control
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>useRef Tasks</h1>

      {/* 1. Input Focus Task */}
      <h2>1. Input Focus Task</h2>

      <input type="text" ref={inputFocusRef} placeholder="Enter Name" />

      <button onClick={() => inputFocusRef.current.focus()}>
        Focus Input
      </button>

      <hr />

      {/* 2. Get Input Value Task */}
      <h2>2. Get Input Value Task</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputValueRef.current.value);
        }}
      >
        <input
          type="text"
          ref={inputValueRef}
          placeholder="Enter Value"
        />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* 3. Clear Input Task */}
      <h2>3. Clear Input Task</h2>

      <input
        type="text"
        ref={clearInputRef}
        placeholder="Type Something"
      />

      <button onClick={() => (clearInputRef.current.value = "")}>
        Clear
      </button>

      <hr />

      {/* 4. Previous Value Track Task */}
      <h2>4. Previous Value Track Task</h2>

      <h3>Current Value: {count}</h3>

      <h3>Previous Value: {prevCount.current}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      {/* 5. Timer Control Task */}
      <h2>5. Timer Control Task</h2>

      <h3>Timer: {timer}</h3>

      <button onClick={startTimer}>Start</button>

      <button onClick={stopTimer}>Stop</button>

    </div>
  );
};

export default App;