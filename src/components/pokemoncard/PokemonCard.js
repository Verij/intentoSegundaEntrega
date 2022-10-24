import React from 'react'

export const PokemonCard = props => {
  const {name, order, weight} = props;
  return (<>
    <h2>{name}</h2>
    <h3>Numero en la pokedex: {order}</h3>
    <h3>Peso: {weight} kg</h3>
    </>
  )
}
