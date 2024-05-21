import Child from "./child";

function App() {
  const name = (data) => {
    return data;
  };
  return (
    <>
      <Child getdata={name}></Child>
      {console.log(name)}
    </>
  );
}

export default App;
