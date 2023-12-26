<template>
  <div>
    <h1>Lista de Pokemons</h1>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pokemon, index) in pokemonList" :key="index">
            <th>{{ ++index }}</th>
            <th>{{ pokemon.name }}</th>
            <th>{{ pokemon.url }}</th>
            <th><button type="button" @click="showInfo">Infos</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let pokemonList = ref([])

    fetch('http://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then((response) => response.json())
      .then((data) => (pokemonList.value = data.results))

    return { pokemonList }
  },
  methods: {
    showInfo() {
      alert(`${this.pokemon.id} - ${this.pokemon.name}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
