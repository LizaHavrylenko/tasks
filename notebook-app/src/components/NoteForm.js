import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class NoteForm extends Component {
  formRef = React.createRef();
  titleRef = React.createRef();
  textRef = React.createRef();

  validate = () => {
    const inputs = [this.titleRef.current, this.textRef.current];
    const { id } = this.props;

    if (!this.formRef.current.checkValidity()) {
      inputs.forEach(input => {
        const errorLabel = input.parentNode.querySelector('.invalid-feedback');

        if (!input.validity.valid) {
          switch (input.id) {
            case 'title':
              errorLabel.textContent = 'Enter the title of your note, please.';
              break;
            case 'text':
              errorLabel.textContent = 'Add the text of your note, please.';
              break;
            default:
              errorLabel.textContent = input.validationMessage;
          }

          input.classList.add('invalid');

          input.addEventListener('input', () => {
            if (input.validity.valid) {
              input.classList.remove('invalid');
              errorLabel.textContent = '';
            }
          });
        } else {
          errorLabel.textContent = '';
        }
      });

      return false;
    } else {
      this.props.history.push(`/notes/${id}`);

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
    const { header, title, text, button, handleChangeInput } = this.props;

    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef} noValidate>
        <h2>{header}</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            ref={this.titleRef}
            className="form-control"
            value={title}
            onChange={event => handleChangeInput(event, 'title')}
            required
          />
          <span className="invalid-feedback"></span>
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <textarea
            type="text"
            id="text"
            ref={this.textRef}
            className="form-control"
            onChange={event => handleChangeInput(event, 'text')}
            value={text}
            required
          ></textarea>
          <span className="invalid-feedback"></span>
        </div>
        <div className="buttonsGroup">
          <button type="submit" className="confirmButton">
            {button}
          </button>
          <Link to="/notes">
            <button type="button" className="cancelButton">
              Back to notes
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

NoteForm.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default withRouter(NoteForm);
