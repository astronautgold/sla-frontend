const Number = () => {
  return (
    <>
      <NumOne />
      <NumTwo />
      <NumThree />
      <NumFour />
      <NumFive />
      <NumSix />
      <NumSeven />
      <NumEight />
      <NumNine />
      <NumTen />
    </>
  );
};

export default Number;

// 1
const NumOne = () => {
  let num = 10;
  return <h1>{num}</h1>;
};

// 2
const NumTwo = () => {
  return <h1>{8}</h1>;
};

// 3 (Addition)
const NumThree = () => {
  const a = 3;
  const b = 5;
  return <h1>{a + b}</h1>;
};

// 4 (Multiplication)
const NumFour = () => {
  const a = 4;
  const b = 7;
  return <h1>{a * b}</h1>;
};

// 5 (Subtraction)
const NumFive = () => {
  const a = 7;
  const b = 2;
  return <h1>{a - b}</h1>;
};

// 6 (Modulus)
const NumSix = () => {
  const a = 4;
  const b = 2;
  return <h1>{a % b}</h1>;
};

// 7 (Multiple values)
const NumSeven = () => {
  const a = 1;
  const b = 2;
  return <h1>{a}, {b}</h1>;
};

// 8 (Power)
const NumEight = () => {
  const a = 9;
  return <h1>{a ** 2}</h1>;
};

// 9
const NumNine = () => {
  const a = 100;
  return <h1>{a}</h1>;
};

// 10 (Division)
const NumTen = () => {
  const a = 100;
  const b = 50;
  return <h1>{a / b}</h1>;
};