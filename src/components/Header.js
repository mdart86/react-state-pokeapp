import React from "react"
import pokemons from '../data/pokemons.json'

const Header = ({name, changeValue}) => {
    return (
        <div>
            <h1>PokeApp</h1>
                <p>How many pokemons? {pokemons.length}</p>
                <select value={name} onChange={changeValue}>
                    {pokemons.map((obj,index) => 
                    <option key={index} value={obj.name}>{obj.name}</option>
                    )
                    }
            </select>
        </div>
    )
}

export default Header