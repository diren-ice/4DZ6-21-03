import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {getPokemons} from "../../components/API/fetchQuerryPokemon";

const PokemonInfo = () => {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();

  useEffect(() => {
    getPokemons(id).then((data => setPokemon(data)));
  }, [id])
  return (
    <div>
      <img src={pokemon?.sprites.other.dream_world.front_default} alt='' />
      <h3> Height: {pokemon?.height}sm</h3>
      <h4> Weight: {pokemon?.weight}grams</h4>
      <p> Abilities: {pokemon?.abilities.map(i=> i.ability.name)}
      </p>
      <h5> Name: {pokemon?.name}
      </h5>
      <p> Form: {pokemon?.forms[0].name}
      </p>
    </div>
  )
}

export default PokemonInfo