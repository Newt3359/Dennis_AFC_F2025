let pokemonArr = [];

const pokemon = require('pokemon')

for (let i =0; i < 5; i++){
    pokemonArr.push(pokemon.random());
}

console.log(pokemonArr)