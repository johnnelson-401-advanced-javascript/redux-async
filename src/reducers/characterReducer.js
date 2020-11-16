import { SET_CHARACTERS, SET_CHARACTERS_LOADING, SET_CHARACTERS_DONE } from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.payload };
    case SET_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case SET_CHARACTERS_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
