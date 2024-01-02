<template>
  <div>
    <input
      v-model="searchText"
      type="text"
      placeholder="Type a pokemon name"
      @input="onSearchTextChange"
    />
    <h1>{{ searchText }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import searchPokemonByText from '@/usecases/searchPokemonByText'

const searchText = ref('')
const emit = defineEmits(['found'])

async function onSearchTextChange() {
  try {
    const response = await searchPokemonByText(searchText.value)
    console.log(response)
    const pokemon = response.data.sprites.front_default
    emit('found', pokemon)
  } catch (error) {
    emit('found', null)
  }
}
</script>

<style lang="scss" scoped></style>
