import axios from 'axios'

const getType = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/type/'
})

export default getType
