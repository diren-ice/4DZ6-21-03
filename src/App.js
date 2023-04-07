
import MainPage from './pages/MainPage/MainPage'
import PokemonInfo from "./pages/PokemonInfo/PokemonInfo";
import { Route, Routes } from "react-router-dom"


import { useEffect, useState } from "react";
import { fetchQueryPokemons } from "../src/components/API/fetchQuerryPokemon";
import PokemonCard from "../src/components/PokemonCsrd/PokemonCard";

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const toogleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }
  const limit = 10

  useEffect(() => {
    fetchQueryPokemons(limit, offset)
      .then((data) => {
        setPokemonList(data?.results);
      });
  }, [offset])

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
          <Route path="/pokemon/:id" element={<PokemonInfo/>}  />
      </Routes>

    <div className={`app ${theme}`}>

      <button
        onClick={toogleTheme}
        className="button">
        Change Theme
      </button>
      <div className="container">
        <div className="pokemonList">
          {pokemonList?.map(pokemon => <PokemonCard pokemon={pokemon} />)}
        </div>
      </div>
    </div>
  )
}

export default App
