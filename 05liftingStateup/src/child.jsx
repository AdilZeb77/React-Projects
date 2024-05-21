import { useState } from "react";

function Child({ getdata }) {
  const [data, setData] = useState("");
  function submithandle(e) {
    e.preventDefault();
    getdata(data);
  }

  return (
    <>
      <form onSubmit={submithandle}>
        <input
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Child;
