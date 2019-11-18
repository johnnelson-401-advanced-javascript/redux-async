export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=20')
    .then(res => res.json())
    .then(({ characters }) => characters.map(character => {
      return { name: character.name, img: character.photoUrl };
    }));
};
