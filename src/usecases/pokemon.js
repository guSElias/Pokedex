import { reactive, toRefs, readonly } from 'vue'

const state = reactive({
  pokemonList: [],
  pokemonMap: {}
})

export default function usePoke() {
  const getAllPokemon = () => {
    if (state.pokemonList.length === 0) {
      fetch('http://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then((response) => response.json())
        .then((data) => (state.pokemonList = data.results))
    }
  }
  return { ...toRefs(readonly(state)), getAllPokemon }
}
