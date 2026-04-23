const Props = ({ name, age, study }) => {
  return (
    <>
      {/* Parent to child */}
      <div>
        <h1>Parent Component</h1>
        <br />
        <p>Name: {name}</p>
      </div>

      <hr />

      {/* Student component */}
      <div>
        <h1>Student Component</h1>
        <br />
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Class: {study}</p>
      </div>
    </>
  );
};

export default Props;