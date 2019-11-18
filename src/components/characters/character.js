import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => (
  <figure>
    <img src={character.img} alt={character.name} />
    <figcaption>{character.name}</figcaption>
  </figure>
);

Character.propTypes = {
  character: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
