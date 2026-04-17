// Main Component
const String = () => {
  return (
    <>
      <div>THIS IS APP</div>

      <StrOne />
      <StrTwo />
      <StrThree />
      <StrFour />
      <StrFive />
      <StrSix />
      <StrSeven />
      <StrEight />
      <StrNine />
    </>
  );
};

export default String;

// 1
const StrOne = () => {
  let name = "Ramya";
  return <h1>{name}</h1>;
};

// 2
const StrTwo = () => {
  let city = "Chennai";
  return <h1>{city}</h1>;
};

// 3
const StrThree = () => {
  let msg = "Welcome";
  return <h1>{msg}</h1>;
};

// 4
const StrFour = () => {
  return <h1>Morning</h1>;
};

// 5
const StrFive = () => {
  const tablet = "vitamin";
  return <h1>{tablet.toUpperCase()}</h1>;
};

// 6
const StrSix = () => {
  const money = "Matters";
  return <h1>{money.length}</h1>;
};

// 7
const StrSeven = () => {
  const age = "Six";
  return <h1>My age is {age}</h1>;
};

// 8
const StrEight = () => {
  const country = "India";
  return <h1>{country}</h1>;
};

// 9
const StrNine = () => {
  const mobile = "Samsung";
  return <h1>My mobile model is {mobile}</h1>;
};