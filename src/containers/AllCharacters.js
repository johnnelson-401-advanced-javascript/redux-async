import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCharacters from '../selectors/character-selectors';
import { setCharacters } from '../actions/characterActions';
import Characters from '../components/characters/characters';


export default function AllCharacters() {
  const characters = useSelector(getCharacters);
  const dispatch = useDispatch();

  getCharacters = dispatch(setCharacters);


  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Characters characters={characters} />
    </>
  );
}
