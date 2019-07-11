import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from './constants';

export const initialState = {
  notesByHash: {},
};

const notebook = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notesByHash: {
          ...state.notesByHash,
          [action.payload.id]: action.payload,
        },
      };
    case UPDATE_NOTE:
      return {
        notesByHash: Object.assign({}, state.notesByHash, {
          [action.payload.id]: action.payload,
        }),
      };
    case DELETE_NOTE: {
      const {
        [action.payload.id]: deletedValue,
        ...newStateNotesByHash
      } = state.notesByHash;

      return {
        recipesByHash: newStateNotesByHash,
      };
    }
    default:
      return state;
  }
};

export default notebook;
