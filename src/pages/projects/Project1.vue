<template>
  <section class="px-4 py-6 sm:p-8 min-h-[calc(100svh-56px)] sm:min-h-[calc(100vh-64px)] bg-white text-[#87CEEB]">
    <h1 class="text-3xl sm:text-4xl font-bold mb-3 adobe-title text-[#87CEEB]">Proyecto 1</h1>
    <p class="text-base sm:text-lg text-black mb-6">Serie de letras del proyecto.</p>

    <div v-if="hoveredIndex === null" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <img
        v-for="(image, index) in images"
        :key="image.src"
        :src="image.src"
        :alt="image.alt"
        class="w-full h-auto rounded-md object-contain bg-white transition-transform duration-300 hover:scale-[1.02]"
        @mouseenter="hoveredIndex = index"
      />
    </div>

    <div v-else class="flex justify-center items-center min-h-[60vh]">
      <img
        v-if="activeImage"
        :src="activeImage.src"
        :alt="activeImage.alt"
        class="w-full max-w-4xl h-auto rounded-md object-contain bg-white"
        @mouseleave="hoveredIndex = null"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

const hoveredIndex = ref<number | null>(null)

const images = [
  { src: "/proyecto 1/proyecto3/letra1.png", alt: "Proyecto 1 - letra 1" },
  { src: "/proyecto 1/proyecto3/letra2.png", alt: "Proyecto 1 - letra 2" },
  { src: "/proyecto 1/proyecto3/letra3.png", alt: "Proyecto 1 - letra 3" },
]

const activeImage = computed(() => (hoveredIndex.value === null ? null : images[hoveredIndex.value] ?? null))
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
