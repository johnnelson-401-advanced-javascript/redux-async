import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters, getCharactersLoading } from '../selectors/character-selectors';
import { setCharacters } from '../actions/characterActions';
import Characters from '../components/characters/characters';


export default function AllCharacters() {
  const characters = useSelector(state => getCharacters(state));
  const dispatch = useDispatch();
  const loading = useSelector(getCharactersLoading);
  
  useEffect(() => {
    console.log(characters);
    
    if(characters.length < 1) {
      dispatch(setCharacters());
    }
  }, []);
  
  if(loading) return <h1>Loading Characters</h1>;
  
  return (
    <>
      <Characters characters={characters} />
    </>
  );
}
