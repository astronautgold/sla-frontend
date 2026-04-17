
const Null = () => {
  return (
    <>
      <NullOne />
      <NullTwo />
      <NullThree />
      <NullFour />
      <NullFive />
      <NullSix />
      <NullSeven />
      <NullEight />
    </>
  );
};

export default Null;

// 1 (null with ??)
const NullOne = () => {
  const val = null;
  return <div>{val ?? "Default Value"}</div>;
};

// 2 (undefined with ??)
const NullTwo = () => {
  const val = undefined;
  return <div>{val ?? "Fallback Value"}</div>;
};

// 3 (normal value)
const NullThree = () => {
  const name = "Ramya";
  return <div>{name ?? "Guest"}</div>;
};

// 4 (undefined check)
const NullFour = () => {
  const num = undefined;
  return <div>{num ?? "No Number"}</div>;
};

// 5 (ternary with null)
const NullFive = () => {
  const data = null;
  return <div>{data ? data : "No Data"}</div>;
};

// 6 (ternary with undefined)
const NullSix = () => {
  const val = undefined;
  return <div>{val ? "Yes" : "No"}</div>;
};

// 7 (optional chaining + null)
const NullSeven = () => {
  const obj = null;
  return <div>{obj?.name ?? "No Name"}</div>;
};

// 8 (undefined + property)
const NullEight = () => {
  const arr = undefined;
  return <div>{arr?.length ?? "No Length"}</div>;
};