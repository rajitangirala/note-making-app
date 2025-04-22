function Notes({ notes ,onDeleteNote}) {
    return (
        <div>
             <ul className="notes-list">
            {notes.map((note) => {
                return (
                    <li key={note.id} className="note-item">
                        {note.text}
                        <button className="delete-btn" onClick={() => onDeleteNote(note.id)}>Delete</button>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
export default Notes;