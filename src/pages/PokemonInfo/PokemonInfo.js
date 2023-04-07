import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {urlPokemons} from "../../components/API/fetchQuerryPokemon";

const PokemonInfo = () => {
  const [pokemons, setPokemons] = useState();
  const { id } = useParams();

  useEffect(() => {
    urlPokemons(id).then((data => setPokemons(data)));
  }, [id])
  return (
    <div>
      <img src={pokemons?.sprites.other.dream_world.front_default} alt='' />
      <h3> Height: {pokemons?.height}sm</h3>
      <h4> Weight: {pokemons?.weight}grams</h4>
      <p> Abilities:{pokemons?.abilities.map(i=> i.ability.name)}
      </p>
      <h5> Name:{pokemons?.name}
      </h5>
      <p> Form:{pokemons?.forms[0].name}
      </p>
    </div>
  )
}

export default PokemonInfo