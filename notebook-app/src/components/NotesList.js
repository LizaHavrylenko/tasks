import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotesList = ({ notes }) => (
  <ul>
    {notes.map(note => {
      const { id, title } = note;

      return (
        <Link to={`/notes/${id}`} key={id.toString()} className="linkToNote">
          <li>{title}</li>
        </Link>
      );
    })}
  </ul>
);

NotesList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default NotesList;