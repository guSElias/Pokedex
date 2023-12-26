<template>
  <article>
    <header>
      <li v-for="card in cards" :key="card">
        {{ card }}
      </li>
    </header>
  </article>
</template>

<script></script>

<style lang="scss" scoped></style>
