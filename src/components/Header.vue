<template>
  <header class="relative text-black min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-start items-start text-left p-5 sm:p-8">
    <div class="absolute inset-0 pointer-events-none z-0">
      <Star class="absolute top-8 left-6 text-red-400/70 fill-current" :size="16" :stroke-width="1.8" />
      <Star class="absolute top-14 right-10 text-red-400/75 fill-current" :size="22" :stroke-width="1.8" />
      <Star class="absolute top-28 left-1/3 text-red-400/70 fill-current" :size="18" :stroke-width="1.8" />
      <Star class="absolute top-40 right-1/4 text-red-400/75 fill-current" :size="24" :stroke-width="1.8" />
      <Star class="absolute bottom-28 left-10 text-red-400/70 fill-current" :size="20" :stroke-width="1.8" />
      <Star class="absolute bottom-20 right-16 text-red-400/70 fill-current" :size="20" :stroke-width="1.8" />
      <Star class="absolute bottom-10 left-1/2 text-red-400/65 fill-current" :size="16" :stroke-width="1.8" />
      <Star class="absolute bottom-8 right-8 text-red-400/75 fill-current" :size="18" :stroke-width="1.8" />
    </div>

    <div class="relative z-10 w-full">
      <h1 class="inline-block px-2 py-1 text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 text-red-500 adobe-title">¡Hola! Soy Inés</h1>
      <p class="text-base sm:text-xl mb-4 sm:mb-6">Diseñadora gráfica | Portafolio Personal</p>
      <img
        src="/fresaa.png"
        alt="Imagen principal"
        class="block mx-auto w-full max-w-3xl h-auto object-contain mt-4"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Star } from 'lucide-vue-next'

export default defineComponent({
  name: 'Header',
  components: { Star }
})
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
