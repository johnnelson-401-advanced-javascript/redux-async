import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl }) => (
  <figure>
    <img src={photoUrl || 'https://media2.giphy.com/media/12ku9ihOJlJ36U/source.gif'} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string
};

export default Character;
