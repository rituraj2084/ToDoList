import React,{useState} from "react";
import ToDoItem from "./ToDoItem";


function App() {
    let [items, setItems] = useState([]);
    let [inputText, setInputText] = useState("");

    function handleChange(event){
        setInputText(event.target.value)
    }

    function handleClick(){
        setItems((prevItem)=>{
            return [...prevItem, inputText] ;
        });
        setInputText = "";
    }

    function deleteItem(id){
      setItems(prevItems => {
        return prevItems.filter((item, index)=>{
          return index !== id;
        })
      })
    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((item, index) => {
           return <ToDoItem key={index} id={index} item = {item} onChecked={deleteItem}/>
        })}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
