import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from './constants';

export const addNote = note => ({
  type: ADD_NOTE,
  payload: note,
});

export const updateNote = note => ({
  type: UPDATE_NOTE,
  payload: note,
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id: id,
});
