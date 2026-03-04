<template>
  <header class="bg-white text-black min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-start items-start text-left p-5 sm:p-8">
    <h1 class="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 adobe-title">¡Hola! Soy Inés</h1>
    <p class="text-base sm:text-xl mb-4 sm:mb-6">Diseñadora gráfica | Portafolio Personal</p>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
