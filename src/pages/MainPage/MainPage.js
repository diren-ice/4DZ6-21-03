import { useEffect, useState } from "react";
import {fetchQueryPokemons} from "../../components/API/fetchQuerryPokemon";
import PokemonCard from "../../components/PokemonCsrd/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from 'react-router-dom'


const MainPage = () => {
    const [ pokemonList, setPokemonList ] = useState([]);
    const [ pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1)
    const [ offset, setOffset ] = useState(0);
    const [ theme, setTheme ] = useState('light')


    const limit  = 10;


    useEffect(() => {
        fetchQueryPokemons(limit, offset)
        .then((pokeList) => {
          setPokemonList(pokeList.results)
          const count = Math.ceil(pokeList.count / limit)
          setPageCount(count);
        });
      }, [ offset ])

      const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }
      const handleNext = () => {

        if(page === pageCount) return
        setPage(prevState => prevState += 1)
        setOffset(prev => prev += limit);

      }


      const handlePrev = ()  => {
        if(page === 1) return

        setPage(prevState => prevState -= 1)
        setOffset(prev => prev -= limit);

      }
  return (
    <div>
        <div className={`app ${theme}`}>
      <div className="container">

          <button onClick={toggleTheme} className="button" >Change Theme</button>
        <div className="pokemonList">
          {pokemonList.map(pokemon =>
          <Link to={`/${pokemon.name}`} key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
          </Link>)}
        </div>

             <Pagination
        pageCount={pageCount}
        page={page}
        handleNext={handleNext}
        handlePrev={handlePrev}
        />
    </div>
        </div>
    </div>
  )
}

export default MainPage




