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

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeText = event => {
    this.setState({
      text: event.target.value,
    });
  };

  handleChangeInput = event => {
    event.target.style.height = 'inherit';
    const computed = window.getComputedStyle(event.target);
    const height =
      parseInt(computed.getPropertyValue('border-top-width'), 10) +
      event.target.scrollHeight +
      parseInt(computed.getPropertyValue('border-bottom-width'), 10);
    event.target.style.height = height + 'px';
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
        handleChangeText={this.handleChangeText}
        handleChangeTitle={this.handleChangeTitle}
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
