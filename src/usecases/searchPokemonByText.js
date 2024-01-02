import axios from 'axios'

const searchPokemonByText = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export default searchPokemonByText
