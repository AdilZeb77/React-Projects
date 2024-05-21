import { useContext } from "react";
import { data } from "../App";

function Childc() {
  const name = useContext(data);
  return <h1>my name is{name}</h1>;
}

export default Childc;
