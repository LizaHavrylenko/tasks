import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class NoteForm extends Component {
  state = {
    redirect: false,
  };

  formRef = React.createRef();
  titleRef = React.createRef();
  textRef = React.createRef();

  validate = () => {
    const inputs = [this.titleRef.current, this.textRef.current];

    if (this.formRef.current.checkValidity() === false) {
      inputs.forEach(input => {
        const errorLabel = input.parentNode.querySelector('.invalid-feedback');
        if (!input.validity.valid) {
          switch (input.id) {
            case 'title':
              errorLabel.textContent = 'Enter the title of your note, please.';
              break;
            case 'text':
              errorLabel.textContent = 'Add the text of your note, please';
              break;
            default:
              errorLabel.textContent = input.validationMessage;
          }

          input.classList.add('invalid');

          input.addEventListener('input', () => {
            if (input.validity.valid) {
              input.classList.remove('invalid');
            }
          });
        } else {
          errorLabel.textContent = '';
        }
      });

      return false;
    } else {
      this.setState({
        redirect: true,
      });

      inputs.forEach(input => {
        const errorLabel = input.parentNode.querySelector('.invalid-feedback');
        errorLabel.textContent = '';
      });

      return true;
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.validate()) {
      const { handleFormSubmit } = this.props;

      handleFormSubmit();
    }
  };

  render() {
    const { redirect } = this.state;
    const {
      header,
      title,
      text,
      id,
      button,
      handleChangeTitle,
      handleChangeInput,
      handleChangeText,
    } = this.props;
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef} noValidate>
        <h2>{header}</h2>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            ref={this.titleRef}
            className="form-control"
            value={title}
            onChange={handleChangeTitle}
            onInput={handleChangeInput}
            required
          />
          <span className="invalid-feedback"></span>
        </div>
        <div className="form-group">
          <label htmlFor="text">Text:</label>
          <textarea
            type="text"
            id="text"
            ref={this.textRef}
            className="form-control"
            onChange={handleChangeText}
            value={text}
            onInput={handleChangeInput}
            required
          ></textarea>
          <span className="invalid-feedback"></span>
        </div>
        <button type="submit">{button}</button>
        <Link to="/notes">
          <button type="button">Back to notes</button>
        </Link>
        {redirect && <Redirect to={`/notes/${id}`}></Redirect>}
      </form>
    );
  }
}

NoteForm.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  handleChangeTitle: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default NoteForm;
