import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateNote, deleteNote } from '../store/actions';
import NoteForm from '../components/NoteForm';

class UpdateNote extends Component {
  state = {
    title: this.props.note.title,
    text: this.props.note.text,
    id: this.props.note.id,
  };

  handleChangeInput = (event, type) => {
    this.setState({
      [type]: event.target.value,
    });
  };

  handleUpdateNote = () => {
    const { updateNote } = this.props;
    const { id } = this.state;

    updateNote(this.state);
    this.props.history.push(`/notes/${id}`);
  };

  handleDeleteNote = () => {
    const { deleteNote } = this.props;
    const { id } = this.state;

    deleteNote(id);
    this.props.history.push('/notes');
  };

  render() {
    const { title, text, id } = this.state;

    return (
      <Fragment>
        {title === 'Searched note is not found' ? (
          <Link to="/notes">
            <button type="button">Back to notes</button>
          </Link>
        ) : (
          <div>
            <NoteForm
              handleChangeInput={this.handleChangeInput}
              handleFormSubmit={this.handleUpdateNote}
              title={title}
              text={text}
              id={id}
              header="Edit Note"
              button="Save"
            />
            <button type="button" onClick={this.handleDeleteNote}>
              Delete this note
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

UpdateNote.propTypes = {
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

export default connect(
  mapStateToProps,
  { updateNote, deleteNote },
)(UpdateNote);
