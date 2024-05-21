import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charallowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "012345677890";
    if (charallowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charallowed, setpassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charallowed, passwordGenerator]);

  //ref hook
  const passref = useRef(null);

  //button functionality//

  const copytoclipboard = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className=" w-full h-screen  bg-gray-300 ">
        <div className=" w-full h-auto flex justify-center items-center bg-gray-500 shadow-lg ">
          <h2 className="text-white text-4xl">Password Generator</h2>
        </div>

        <div className=" ps-[25%] pt-20 ">
          <div className=" ps-[200px] items-center pt-10 w-[60%] h-[60%] bg-slate-400">
            <input
              type="text"
              value={password}
              readOnly
              className=" outline-none w-[400px] h-8 rounded-lg"
              placeholder=" Password"
              ref={passref}
            ></input>
            <button
              className="bg-blue-600 shrink-0 text-white rounded-xl  outline-none shadow-sm p-2"
              onClick={copytoclipboard}
            >
              Copy
            </button>
            <br></br>
            <div className="flex py-2 items-center gap-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setlength(e.target.value);
                }}
                className=" cursor-pointer"
              ></input>
              <label className="text-white text-2xl">Length:{length}</label>

              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              ></input>
              <label className="text-white text-2xl">Number</label>
              <input
                type="checkbox"
                defaultChecked={charallowed}
                id="numberInput"
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              ></input>
              <label className="text-white text-2xl">character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
