import React from "react";

function ToDoItem(props){
    // const [isDone, setIsDone] = useState(false);
    // function handleClick(){
    //     setIsDone((prevValue) => {
    //         return !prevValue;
    //     })
    // }
    return <div onClick={()=>{props.onChecked(props.id)}}>
        {/* <li style={{textDecoration : isDone? "line-through" : "none"}}>{props.item}</li>;  */}
        <li>{props.item}</li>;
    </div>
    
}

export default ToDoItem;