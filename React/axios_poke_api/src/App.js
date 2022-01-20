import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {

  const [pokemon, setPokemon] = useState([])

  const catchPokemonAxios =() =>{
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100")
        .then(response=>{
            console.log(response.data.results)
            setPokemon(response.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
}

  return (
    <div className="App">
      <h1>Whose that Pokemon?</h1>
      <button className="btn btn-danger" onClick={catchPokemonAxios}>Fetch Pokemon by Axios </button> 
      <div>
        {/* {JSON.stringify(pokemon)} */}
        {pokemon.map((pkmn, index) => {
          return (<h4 key={index}>{pkmn.name}</h4>)
        })}

      </div>
    </div>
  );
}

export default App;
