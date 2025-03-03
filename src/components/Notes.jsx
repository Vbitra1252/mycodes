import { useState } from "react";
import "./Notes.css";

export default function Notes() {
    const [notes, setNotes] = useState([
        { text: "This is Docket note.", date: "" },
        { text: "The beginning of screenless design: UI jobs to be taken over by Solution Architect", date: "May 21, 2020" }
    ]);
    const [newNote, setNewNote] = useState("");

    const addNote = () => {
        if (newNote.trim() === "") return;
        setNotes([...notes, { text: newNote, date: new Date().toDateString() }]);
        setNewNote("");
    };

    return (
        <div className="app-container">
            <h1>Notes</h1>
            <div className="notes-container">
                {notes.map((note, index) => (
                    <div key={index} className="note-card">
                        <p>{note.text}</p>
                        {note.date && <span className="note-date">{note.date}</span>}
                    </div>
                ))}
            </div>
            <div className="add-note-container">
                <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Enter your note..."
                />
                <button onClick={addNote}>Add Note</button>
            </div>
        </div>
    );
}
