import React from 'react';
import PropTypes from 'prop-types';
import Character from './character';
import styles from './characters.css';

const Characters = ({ characters }) => {
  const notFound = 'https://media2.giphy.com/media/12ku9ihOJlJ36U/source.gif';
  const characterList = characters.map(character => (
    <li key={character._id}>
      <Character key={character._id} name={character.name} photoUrl={character.photoUrl || notFound} />
    </li>
  ));
  return (
    <ul className={styles.Characters}>
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

