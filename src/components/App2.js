import React from 'react'
import pokemons from '../data/pokemons.json'

//const url = "https://pokeapi.co/api/v2/pokemon/?limit=25"
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     pokemons = data.results
//     console.log(pokemons)
//   })
//   .catch(e => {console.log(e)})
console.log("out of the fetch: ",pokemons)

const App = () => {
  let name = "pikachu"
  const changeValue= (e)=> {
    console.log(e.target.value)
    name = e.target.value
    console.log(name)
  }

  return (
    <div >
          <h1>PokeApp</h1>
          <p>How many pokemons? {pokemons.length}</p>
          <select value={name} onChange={changeValue}>
            {pokemons.map((obj,index) => 
              <option key={index} value={obj.name}>{obj.name}</option>
            )
            }
          </select>
          <p>You selected {name}</p>
    </div>
  )
}

export default App
