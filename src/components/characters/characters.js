import React from 'react';
import PropTypes from 'prop-types';
import Character from './character';


const Characters = ({ characters }) => {
  const characterList = characters.map(character => (
    <li key={character.name}> 
      <Character {...character} />
    </li>
  ));
  return (
    <ul>
      {characterList}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })).isRequired
};


export default Characters;

