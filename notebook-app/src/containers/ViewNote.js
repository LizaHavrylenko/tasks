import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ViewNote = ({ note: { title, text, id } }) => (
  <Fragment>
    <h2>{title}</h2>
    <p>{text}</p>
    <div className="buttonsGroup">
      {title !== 'Searched note is not found' && (
        <Link to={`/notes/${id}/update`}>
          <button type="button" className="confirmButton">
            Edit this note
          </button>
        </Link>
      )}
      <Link to="/notes">
        <button type="button" className="cancelButton">
          Back to notes
        </button>
      </Link>
    </div>
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
