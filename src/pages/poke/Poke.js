import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { pokemonInicial } from '../../data/pokemonInicial.';
import { Loader } from '../../components/loader/Loader';
import { Search } from '../../components/search/Search';
import { PokemonCard } from '../../components/pokemoncard/PokemonCard';
import { StyledContainer } from '../../components/todoList/TodoListStyles';

const Poke = () => {
  const [data, setData] = useState(pokemonInicial);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try{
      let selectedPokemon = pokemon.toLowerCase().trim( );

      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
      setData(data);
    } catch(error){
      setError('Pokemon no encontrado');
    }
    setIsLoading(false);
  };
  return (
    <>
    <StyledContainer>
    <Search handleSubmit={handleSubmit}/>
    {isLoading && <Loader />}
    {error && <h2>{error}</h2>}
    {data && <PokemonCard { ... data} />}
    </StyledContainer>
    </>
  )
}

export default Poke;