import React from 'react';
import PropTypes from 'prop-types';
import styles from './character.css';

const Character = ({ name, photoUrl }) => (
  <figure className={styles.characterFigure}> 
    <img src={photoUrl} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string
};

export default Character;
