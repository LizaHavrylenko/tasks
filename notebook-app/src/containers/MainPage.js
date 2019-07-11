import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NotesList from '../components/NotesList';

const MainPage = ({ notes }) => (
  <Fragment>
    <h1>Notebook</h1>
    {notes && notes.length > 0 && <NotesList notes={notes} />}
    <Link to="/notes/new">Add new note</Link>
  </Fragment>
);

const mapStateToProps = state => ({
  notes: Object.values(state.notesByHash),
});

MainPage.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default connect(mapStateToProps)(MainPage);
