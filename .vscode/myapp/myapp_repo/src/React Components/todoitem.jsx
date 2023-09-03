import React, { useState } from "react";


function Todoitem(props){

    const [isdone,setisdone]=useState(false);

    function handlechange(){
        setisdone(prevalue =>{
            return !prevalue;
        })
    }

    return(
        <div onClick={handlechange}>
        <li style={{textDecoration : isdone ? "line-through" : "none"}}>{props.text}</li>
        </div>
    )
}
// onclick(() =>{
//     props.onChecked(props.id)
// })
export default Todoitem;