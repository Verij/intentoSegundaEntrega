import React, { useState } from 'react'
import { BotonStyled, InputStyled, SearchStyled } from './SearchStyles';



export const Search = ({ handleSubmit }) => {

  const [ pokemon, setPokemon] = useState('');


  return (
    <SearchStyled 
    onSubmit={e => {
      e.preventDefault();
      handleSubmit(e, pokemon);
      setPokemon('');
    }}>
      <InputStyled placeholder='Buscar Pokemon'
      value= {pokemon}
      onChange={e => setPokemon(e.target.value)}/>
      <BotonStyled type='submit'>Buscar</BotonStyled>
    </SearchStyled>
  )
}
