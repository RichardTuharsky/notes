import NotesList from "./components/NotesList";
import {nanoid} from "nanoid";
import { useState } from "react";

const App = () => {
    //storing notes in an array
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "This is my first note",
            date: "5/11/2022",
         },
        {
            id: nanoid(),
            text: "This is my second note",
            date: "5/11/2022",
        },
        {
            id: nanoid(),
            text: "This is my third note",
            date: "5/11/2022",
        },
    ]);
    
//notes ktore som vytvoril vyssie
  return (
      <div className= 'container'>
        <NotesList notes = {notes}/>
      </div>
  );
};

export default App;