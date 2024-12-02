import React, {useState} from 'react';

import NotePage from '../Pages/NotePage';

const Note = ({ note, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(note.text);
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = () => {
      onEdit(note.id, editedText);
      setIsEditing(false);
    };


    return (
        <div className="note">
          <div className="note-header">
            <h3>{note.title}</h3>
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </div>
          {isEditing ? (
            <>
              <textarea
                rows="4"
                cols="50"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <p>{note.text}</p>
          )}
          {!isEditing && <button onClick={handleEdit}>Edit</button>}
        </div>
      );
    };

export default Note;