import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import '../NotasPage.css';
import { Link, useParams } from 'react-router-dom'; // Importa Link y useParams desde react-router-dom
import { NavBar2 } from './NavBar2';  // Importa el componente NavBar

const NotasPage = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;
  const { id_objeto } = useParams(); // Obtén el parámetro id_objeto

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleAddNote = () => {
    if (noteText.trim().length > 0) {
      const newNote = {
        id: Math.random().toString(36).substr(2, 9),
        text: noteText,
        date: new Date().toLocaleDateString(),
      };
      setNotes([...notes, newNote]);
      setNoteText('');
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className='body'> {/* Agrega la clase 'body' para aplicar los estilos */}
      <NavBar2 /> {/* Agrega el componente NavBar */}
      <div className="content">
        <div className='header'>
          <h1>Notas</h1>
        </div>
        <div className='notes-list'>
          {notes.map((note) => (
            <div className='note' key={note.id}>
              <span>{note.text}</span>
              <div className='note-footer'>
                <small>{note.date}</small>
                <MdDeleteForever
                  onClick={() => handleDeleteNote(note.id)}
                  className='delete-icon'
                  size='1.3em'
                />
              </div>
            </div>
          ))}
          <div className='note new add-note'>
            <textarea
              rows='8'
              cols='10'
              placeholder='Type to add a note...'
              value={noteText}
              onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
              <small>{characterLimit - noteText.length} Remaining</small>
              <button className='save' onClick={handleAddNote}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/ar/${id_objeto}`} className="back-to-ar">Regresar a la página AR</Link>
    </div>
  );
};

export default NotasPage;
