<template>
  <section class="relative p-8 min-h-[70vh]">
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

    <div class="relative z-10">
      <h1 class="inline-block px-2 py-1 text-4xl font-bold mb-3 text-red-500 adobe-title">Sobre mi</h1>
      <p class="text-lg">Soy Inés Pérez Cano, y estudio Diseño y Tecnologías Creativas.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
