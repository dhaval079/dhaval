import React , {useState} from "react";
import Createarea from "./Createarea";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";

function Keeperapp() {
    const [notes,setnotes]=useState([]);


    function addnote(notes){

        // console.log(notes);
        setnotes(prenotes =>{
            return [...prenotes,notes];
        });
    }

  return (
    <div>
      <Heading />
      <Createarea onadd={addnote}  />;
      {notes.map(noteitem => { return <Note title={noteitem.title} content={noteitem.content} /> })}
      <Footer />
    </div>
  );
}

export default Keeperapp;
