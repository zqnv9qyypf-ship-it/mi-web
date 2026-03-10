<template>
  <section class="px-4 py-6 sm:p-8 min-h-[calc(100svh-56px)] sm:min-h-[calc(100vh-64px)] bg-white text-[#87CEEB]">
    <h1 class="text-3xl sm:text-4xl font-bold mb-3 adobe-title text-[#87CEEB]">Tipografía</h1>
    <p class="text-base sm:text-lg text-black mb-6">Para este proyecto desarrollé una tipografía original, inspirandome en la ropa denim y dándole un toque asimétrico. (¡Toca las imágenes!) </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div v-for="(image, index) in images" :key="image.src" class="text-center">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-auto rounded-md object-contain bg-white cursor-pointer transition-all duration-300"
          :class="selectedIndex === index ? '-translate-y-3 shadow-lg' : 'translate-y-0'"
          @click="toggleImage(index)"
        />
        <p
          class="mt-3 text-sm sm:text-base text-black transition-opacity duration-300"
          :class="selectedIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        >
          {{ image.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"

const selectedIndex = ref<number | null>(null)

const images = [
  {
    src: "/proyecto 1/proyecto3/letra1.png",
    alt: "Tipografía - letra 1",
    text: "Usando dos pantalones vaqueros de distinto tono, dibujé y diseñé el trazo de dos letras, una ligeramente más grande que la otra. ",
  },
  {
    src: "/proyecto 1/proyecto3/letra2.png",
    alt: "Tipografía - letra 2",
    text: "Después recorté ambas letras y las cosí a mano con hilo dorado.",
  },
  {
    src: "/proyecto 1/proyecto3/letra3.png",
    alt: "Tipografía - letra 3",
    text: "Y por último usé camisetas de rayas variadas para hacer los fondos y así seguir con esa temática textil.",
  },
]

const toggleImage = (index: number) => {
  selectedIndex.value = selectedIndex.value === index ? null : index
}
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
