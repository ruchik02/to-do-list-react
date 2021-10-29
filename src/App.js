import React, { useState } from "react";
import "./index.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const delItem = (id) => {
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
          return index!==id;
      })
    })
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1 className="heading">todo list</h1>
          <br />
          <input
            type="text"
            className="items"
            placeholder="add items"
            onChange={itemEvent}
            value={inputList}
          />
          <button type="button" className="add-list" onClick={listOfItems}>
            +
          </button>
          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemVal, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={delItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
