import React from 'react';
import PropTypes from 'prop-types';
import Character from './character';

const Characters = ({ characters }) => {
  const characterList = characters.map(character => (
    <li key={character._id}>
      <Character key={character._id} name={character.name} photoUrl={character.photoUrl || notFound} />
    </li>
  ));
  const notFound = 'https://media2.giphy.com/media/12ku9ihOJlJ36U/source.gif';
  return (
    <ul>
      {characterList}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    _id: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;

