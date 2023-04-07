
import MainPage from './pages/MainPage/MainPage'
import PokemonInfo from "./pages/PokemonInfo/PokemonInfo";
import { Route, Routes } from "react-router-dom"

const App = () => {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
          <Route path="/pokemon/:id" element={<PokemonInfo/>}  />
      </Routes>
  )
}

export default App
