import './App.css';
import StickyNote from './stickyNotes';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([])
    function addNote() {
        setNotes([
            ...notes,
            {
                id: Date.now(),
                data:''
            },
        ])
    }
    function deleteNote(noteId) {
        setNotes(notes.filter((note) => note.id !== noteId))
    }
    return (
        <div className="App">
            <button className="sticky-btn" onClick={addNote}>
                Create Note
            </button>
            {notes.map((note) => (
                <StickyNote key={note.id} onClose={() => deleteNote(note.id)} />
            ))}
        </div>
    )
}

export default App;
