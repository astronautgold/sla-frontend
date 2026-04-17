

const Boolean = () => {
  return (
    <>
      <BoolOne />
      <BoolTwo />
      <BoolThree />
      <BoolFour />
      <BoolFive />
      <BoolSix />
      <BoolSeven />
      <BoolEight />
    </>
  );
};

export default Boolean;

// 1
const BoolOne = () => {
  const isLogin = true;
  return <div>{isLogin ? "Logged In" : "Guest"}</div>;
};

// 2
const BoolTwo = () => {
  const age = 18;
  return <div>{age >= 18 ? "Adult" : "Minor"}</div>;
};

// 3
const BoolThree = () => {
  const num = 8;
  return <div>{num >= 8 ? "True" : "False"}</div>;
};

// 4
const BoolFour = () => {
  const physics = true;
  return <div>{physics ? "True" : "False"}</div>;
};

// 5
const BoolFive = () => {
  const color = "pink";
  return <div>{color === "pink" ? "True" : "False"}</div>;
};

// 6
const BoolSix = () => {
  const myValue = "hello";
  return <div>{myValue ? "True" : "False"}</div>;
};

// 7
const BoolSeven = () => {
  const tutor = false;
  return <div>{tutor ? "True" : "False"}</div>;
};

// 8
const BoolEight = () => {
  const age = 3;
  return <div>{age > 5 ? "True" : "False"}</div>;
};