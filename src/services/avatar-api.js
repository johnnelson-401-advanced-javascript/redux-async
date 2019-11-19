export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=50')
    .then(res => res.json())
    .then(characters => {
      return characters;
    });
};
