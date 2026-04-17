
const Optional = () => {
  return (
    <>
      <OpOne />
      <OpTwo />
      <OpThree />
      <OpFour />
      <OpFive />
      <OpSix />
      <OpSeven />
      <OpEight />
    </>
  );
};

export default Optional;

// 1
const OpOne = () => {
  const user = { name: "Ramya" };
  return <div>{user?.name}</div>;
};

// 2
const OpTwo = () => {
  const user = null;
  return <div>{user?.age}</div>; // no error
};

// 3
const OpThree = () => {
  const data = { info: { city: "Chennai" } };
  return <div>{data?.info?.city}</div>;
};

// 4
const OpFour = () => {
  const data = {};
  return <div>{data?.info?.city}</div>; // undefined safely
};

// 5
const OpFive = () => {
  const arr = [1, 2];
  return <div>{arr?.[0]}</div>;
};

// 6
const OpSix = () => {
  const arr = null;
  return <div>{arr?.[0]}</div>; // safe, no crash
};

// 7
const OpSeven = () => {
  const name = "Ramya";
  return <div>{name?.toUpperCase()}</div>;
};

// 8
const OpEight = () => {
  const obj = { a: { b: { c: 10 } } };
  return <div>{obj?.a?.b?.c}</div>;
};