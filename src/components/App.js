import React, {Component} from 'react'
import pokemons from '../data/pokemons.json'
const url = "https://pokeapi.co/api/v2/pokemon/"

class App extends Component{
    constructor(props){
      super(props)
      this.state = {
        name: "pikachu", 
        pokemon: null
      }

    }

    componentDidMount(){
        this.getPokemon(this.state.name)
    }
    
    getPokemon(name){
        fetch(url+name)
        .then(response => response.json())
        .then(data => {
            this.setState({pokemon: data.sprites.other["official-artwork"].front_default})
        })
    }


    changeValue= (e)=> {
        console.log(e.target.value)
        this.setState({name: e.target.value})
        this.getPokemon(e.target.value)
      }

    render(){ 
        console.log(this.state)
        return (
            <div>
                <h1>PokeApp</h1>
                <p>How many pokemons? {pokemons.length}</p>
                <select value={this.state.name} onChange={this.changeValue}>
                    {pokemons.map((obj,index) => 
                    <option key={index} value={obj.name}>{obj.name}</option>
                    )
                    }
                </select>
                <p>You selected {this.state.name}</p>
                <img src={this.state.pokemon} alt={this.state.name}/>        
            </div>
        )
    }

}

export default App