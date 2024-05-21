import { useState } from "react";
function ToddoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  // function removeActivitiy(i) {
  //   const updatedList = listData.filter((elem, id) => {
  //     return i != id;
  //   });
  //   setListData(updatedList);
  // }

  function removeall() {
    setListData([]);
  }
  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);
    setListData((listData) => {
      const updatelist = [...listData, activity];
      console.log(updatelist);
      setActivity("");
      return updatelist;
    });
  }
  return (
    <>
      <div>
        <header>ToDo List</header>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        ></input>
        <button onClick={addActivity}>Add</button>
        <p>Here Is Your Data</p>

        {listData != [] &&
          listData.map((data) => {
            return (
              <>
                <p key={data.length}>
                  <div>{data}</div>
                  {console.log(data + "in div")}
                  {listData.length >= 1 && (
                    <button onClick={removeall}>Remove All</button>
                  )}
                  {/* <button onClick={removeActivitiy(i)}>Remove</button> */}
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}

export default ToddoList;
