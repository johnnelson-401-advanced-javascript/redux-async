export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(([{ name, photoUrl }]) => {
      return { name: name, img: photoUrl };
    });
};
