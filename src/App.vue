<template>
  <div>
    <SearchBar @found="onPokemonFound" />
    <PokeData v-if="currentPokemon" :currentPokemon="currentPokemon" />
    <PokemonTable v-else />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PokeData from './components/PokeData.vue'
import SearchBar from './components/SearchBar.vue'
import PokemonTable from './components/PokemonTable.vue'

const currentPokemon = ref()

function onPokemonFound(pokemon) {
  currentPokemon.value = pokemon
}


console.log(currentPokemon)
</script>

<style></style>
