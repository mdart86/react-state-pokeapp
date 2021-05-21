import React from "react"

const Pokemon = ({name, pokemon}) => {
        return (
            <div>
            <p>You selected {name}</p>
            {pokemon &&
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt={name}/>
            }
            </div>
        ) 
}

export default Pokemon


/*

// { pokemon !== null? :  <img src={ data.sprites.other["official-artwork"].front_default} alt={name}/> }     

// if (pokemon) {
//     return (
//         <div>
//             <p>You selected {name}</p>
//         <img src={ data.sprites.other["official-artwork"].front_default} alt={name}/>        
//         </div>
//     )
// } else {
//     return <p>Loading...</p>
// }
*/
