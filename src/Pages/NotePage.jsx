import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Note from "../Components/Note";
import useLocalStorage from "../Components/UseLocalStorage";


function NotePage(){
    const [notes, setNotes] = useLocalStorage('items2',[]);
    const [newNote, setNewNote] = useState({ title: "", text: "" });

 

const addNote = () => {
    if (newNote.title && newNote.text) {
        const newId = Date.now().toString();
        setNotes([...notes, {...newNote, id: newId}]);
        setNewNote({ title: "", text: "" });
    }
};

const editNote = (id, newText) => {
  const updatedNotes = notes.map((note) =>
    note.id === id ? { ...note, text: newText } : note
  );
  setNotes(updatedNotes);
};

const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes); 
};


return (
    <>
    <Navbar />
    <br />
    <br />
    <br />
    <div className="personal-top">
        <h1>Your notes</h1>
        </div>
        <br />
    <div className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={newNote.title}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
      />
      <textarea
        rows="4"
        cols="50"
        placeholder="Text"
        value={newNote.text}
        onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
      />
      <button onClick={addNote}>Add Note</button>
    </div>
    <div className="note-list">
        {notes.map((note) => (
      <Note key={note.id} note={note} onDelete={deleteNote} onEdit={editNote} />
    ))}
    </div>
</>
);


}
  

export default NotePage;

