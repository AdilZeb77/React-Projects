import { useState } from "react";

function App() {
  const [name, setName] = useState({ firstname: "Adil", Lastname: "Zeb" });
  console.log(name);
  function changename() {
    setName({ ...name, firstname: "Ahmed" });
  }
  return (
    <>
      <h1>
        my first name {name.firstname} and last name is {name.Lastname}
      </h1>
      <button onClick={changename}>on change</button>
    </>
  );
}

export default App;
