export const getCharacters = state => {
  console.log(state);
  return state.character.characters;
};
export const getCharactersLoading = state => state.loading;
