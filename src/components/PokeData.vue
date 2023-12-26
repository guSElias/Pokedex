<template>
  <div>
    <img v-if="currentPokemon" :src="currentPokemon" alt="pokemon image" srcset="" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['currentPokemon'])
const pokemonName = ref('')

</script>
