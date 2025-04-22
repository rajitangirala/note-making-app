# Note-Taking App Backend

This is the backend for a simple note-taking application built with **Node.js** and **Express**. It allows users to create, read, and delete notes, which are stored in a local `notes.json` file.

## Features

- Create new notes
- Get all saved notes
- Delete notes by ID

## Tech Stack

- Node.js
- Express.js
- CORS
- File system module (fs)

## Endpoints

### GET `/notes`
- Returns all saved notes.

### POST `/notes`
- Adds a new note.
- Expects a JSON body with a `text` field.
```json
{
  "text": "Your note here"
}

