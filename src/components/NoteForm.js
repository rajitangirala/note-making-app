import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ onNoteCreated }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await axios.post('http://localhost:5000/notes', { text });
      onNoteCreated(res.data); // pass new note to parent
      setText('');
    } catch (err) {
      console.error('Error creating note:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Write your note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
