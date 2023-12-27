import axios from 'axios'

const batata = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export default batata
