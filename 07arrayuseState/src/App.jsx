import { useState } from "react";

function App() {
  const arr = [];
  const [item, setItem] = useState(arr);
  const obj = { id: item.length, value: Math.random() };
  function additems() {
    setItem([...item, obj]);
  }
  return (
    <div>
      <ol>
        {item.map((items) => {
          return <li key={items.id}>{items.value}</li>;
        })}
      </ol>
      <button onClick={additems}> Click Me</button>
    </div>
  );
}

export default App;
