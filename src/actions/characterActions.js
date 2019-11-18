import { createAction } from 'promise-middleware-redux';
import { fetchCharacters } from '../services/avatar-api';

// const SET_CHARACTERS = 'GET_CHARACTERS';
// const SET_CHARACTERS_DONE = 'SET_CHARACTERS_DONE';
// const SET_CHARACTERS_LOADING = 'SET_CHARACTERS_LOADING';

export const setCharacters = () => dispatch => {
  dispatch({
    type: SET_CHARACTERS_LOADING
  });

  return fetchCharacters()
    .then(characters => {
      dispatch({
        type: SET_CHARACTERS,
        payload: characters
      });

      dispatch({
        type: SET_CHARACTERS_DONE
      });
    });
};

export const [
  SET_CHARACTERS,
  SET_CHARACTERS_LOADING,
  SET_CHARACTERS_DONE
] = createAction('SET_CHARACTERS', fetchCharacters);

