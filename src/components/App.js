import React, {Component} from 'react'
import Pokemon from "./Pokemon"
import Header from "./Header"
const url = "https://pokeapi.co/api/v2/pokemon/"

class App extends Component{
    constructor(props){
      super(props)
      this.state = {
        name: "pikachu", 
        pokemon: null,
        loading: true
      }
    }

    componentDidMount(){
        this.getPokemon(this.state.name)
    }

    componentDidUpdate(){
        console.log("I'm here..")
    }
    
    getPokemon(name){
        fetch(url+name)
        .then(response => response.json())
        .then(data => {
            this.setState({
            pokemon: data,
            loading: false
            })
        })
    }


    changeValue= (e)=> {
        console.log(e.target.value)
        this.setState({
            name: e.target.value,
            loading: true
        })  // re-render first
        this.getPokemon(e.target.value) // then re-render second ... via the getPokemon function
      }

    render(){ 
        console.log(this.state)
        const {name, pokemon, loading} = this.state
        return (
            <div>
                <Header name={name} changeValue={this.changeValue}/>
                { loading ? <h2>Loading...</h2> : <Pokemon name={name} pokemon={pokemon} />}
            </div>
        )
    }

}

export default App