import './App.css';
import Notes from './components/Notes';
import { useState, useEffect } from 'react';
import axios from 'axios'
import NoteForm from './components/NoteForm';
function App() {
  const [notes, setNotes] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:5000/notes')
      .then((res) => setNotes(res.data))
      .catch((err) => console.error('Error fetching notes:', err));
  }, []);
  const handleNoteCreated = (newNote) => {
    setNotes([newNote, ...notes]);
  };
  // Handle note deletion
  const handleDeleteNote = (id) => {
    axios.delete(`http://localhost:5000/notes/${id}`)
      .then(() => {
        // Remove the deleted note from state
        setNotes(notes.filter(note => note.id !== id));
      })
      .catch((err) => console.error('Error deleting note:', err));
  };
  return (
    <div className="App">
     <h1> Notes app</h1>
      <Notes notes={notes}  onDeleteNote={handleDeleteNote} />
      <NoteForm onNoteCreated={handleNoteCreated}/>
          </div>
  );
}

export default App;
