<template>
  <section class="px-4 py-6 sm:p-8 min-h-[calc(100svh-56px)] sm:min-h-[calc(100vh-64px)] bg-white text-[#F7B5C8]">
    
    <h1 class="text-3xl sm:text-4xl font-bold mb-3 adobe-title text-[#F7B5C8]">
      Ilustración
    </h1>

    <p class="text-base sm:text-lg text-[#3b2a1a] mb-6">
      Para este proyecto ilustré una nueva versión del libro "Alicia en el país de las maravillas" utilizando pintura acrílica.
    </p>

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
          class="mt-3 text-sm sm:text-base text-[#3b2a1a] transition-opacity duration-300"
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
    src: "/proyecto-5/MOCKUP22.png",
    alt: "Ilustración 1",
    text: "Primero, tras buscar algunas referencias, elegí lo que iba a representar en cada parte del libro.",
  },
  { src: "/proyecto-5/MOCKUP11.png", alt: "Ilustración 2", text: "Después dibujé y pinté todas las ilustraciones." },
  { src: "/proyecto-5/MOCKUP33.png", alt: "Ilustración 3", text: "Finalmente añadí y maqueté los textos, y monté los mockups." },
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
