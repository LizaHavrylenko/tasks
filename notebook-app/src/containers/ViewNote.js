import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ViewNote = ({ note: { title, text, id } }) => (
  <Fragment>
    <h2>{title}</h2>
    {title !== 'Searched note is not found' && (
      <Fragment>
        <p>{text}</p>
        <Link to={`/notes/${id}/edit`}>
          <button type="button">Edit this note</button>
        </Link>
      </Fragment>
    )}
    <Link to="/notes">
      <button type="button">Back to notes</button>
    </Link>
  </Fragment>
);

ViewNote.propTypes = {
  id: PropTypes.string.isRequired,
  note: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  if (Object.getOwnPropertyNames(state.notesByHash).includes(ownProps.id)) {
    return { note: state.notesByHash[ownProps.id] };
  }

  return {
    note: {
      title: 'Searched note is not found',
      text: '',
    },
  };
};

export default connect(mapStateToProps)(ViewNote);
