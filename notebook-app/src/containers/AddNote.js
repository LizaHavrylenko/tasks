import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addNote } from '../store/actions';
import NoteForm from '../components/NoteForm';

class AddNote extends Component {
  state = {
    title: '',
    text: '',
    id: uuidv4(),
  };

  handleChangeInput = (event, type) => {
    this.setState({
      [type]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { addNote } = this.props;

    addNote(this.state);
    this.setState({
      title: '',
      text: '',
    });
  };

  render() {
    const { title, text, id } = this.state;

    return (
      <NoteForm
        handleChangeInput={this.handleChangeInput}
        handleFormSubmit={this.handleSubmit}
        title={title}
        id={id}
        text={text}
        header="New Note"
        button="Add"
      />
    );
  }
}

export default connect(
  null,
  { addNote },
)(AddNote);
