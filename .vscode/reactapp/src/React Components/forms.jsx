import React from "react";
import { useState } from "react";

function FormsNew(){
    const [name,setName] =useState("");

    function handleChange(event){
        console.log(event.target.value);
        setName(event.target.value);
    }

    return(
        <div>
            <h1>Hello {name}</h1>
            <input onChange={handleChange} placeholder="What's your name" type="text"></input>
            <button>Submit</button>
        </div>
    )
}

export default FormsNew;