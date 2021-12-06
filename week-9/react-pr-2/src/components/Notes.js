import React from 'react';

const Notes = () => {
    return (
        <ul className="list-group"> 
        {
            notes.map(note => (
                <li className="list-group-item" key={note.id}>{note.title}</li>
            ))
        }
        </ul>
    );
};

export default Notes;