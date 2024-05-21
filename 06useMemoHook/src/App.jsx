import { useMemo, useState } from "react";
import ChildA from "./ChildA";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiply = useMemo(
    function multiplication() {
      console.log("---------");
      return add * 10;
    },
    [add]
  );
  return (
    <>
      <ChildA />
      {multiply}
      <h1>{add}</h1>
      <br />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <h1>{minus}</h1>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Sub</button>
    </>
  );
}

export default App;
