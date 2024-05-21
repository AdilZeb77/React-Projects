import { useEffect } from "react";
import { useState } from "react";

function App() {
  const data = { name: "", email: "", password: "" };
  const [inputdata, setinputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  function handlechange(e) {
    setinputData({ ...inputdata, [e.target.name]: e.target.value });
  }
  function handlesubmitt(e) {
    e.preventDefault();
    if (!inputdata.name || !inputdata.email || !inputdata.password) {
      alert("All files Are Mendatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>{flag ? <h1>hello {inputdata.name} </h1> : ""} </pre>
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={handlesubmitt}>
          <input
            type="text"
            name="name"
            value={inputdata.name}
            onChange={handlechange}
          ></input>
          <br />
          <input
            type="text"
            name="email"
            value={inputdata.email}
            onChange={handlechange}
          ></input>
          <br />
          <input
            type="text"
            name="password"
            value={inputdata.password}
            onChange={handlechange}
          ></input>
          <br />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
