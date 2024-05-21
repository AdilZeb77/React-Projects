import { createContext } from "react";
import ChildA from "./Child/ChildA";

const data = createContext();
function App() {
  const name = "adil";
  return (
    <data.Provider value={name}>
      <ChildA />
    </data.Provider>
  );
}

export default App;
export { data };
