<template>
  <section class="px-4 py-6 sm:p-8 min-h-[calc(100svh-56px)] sm:min-h-[calc(100vh-64px)] bg-white text-[#87CEEB]">
    
    <h1 class="text-3xl sm:text-4xl font-bold mb-3 adobe-title text-[#87CEEB]">
      Ilustración
    </h1>

    <p class="text-base sm:text-lg text-black mb-6">
      Para estas ilustraciones me basé en el libro de "Alicia en el país de las maravillas" realizando una nueva versión.
    </p>

    <div v-if="selectedIndex === null" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div v-for="(image, index) in images" :key="image.src" class="text-center">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full aspect-square rounded-md object-cover bg-white cursor-pointer transition-all duration-300"
          @click="toggleImage(index)"
        />
      </div>
    </div>

    <div v-else class="mt-8 flex justify-center">
      <div class="w-full max-w-3xl cursor-pointer" @click="toggleImage(selectedIndex)">
        <img
          :src="images[selectedIndex].src"
          :alt="images[selectedIndex].alt"
          class="block w-full aspect-square object-cover rounded-md"
        />
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"

const selectedIndex = ref<number | null>(null)

const images = [
  { src: "/proyecto 5/MOCKUP22.png", alt: "Ilustración 1", text: "Ilustración 1." },
  { src: "/proyecto 5/MOCKUP11.png", alt: "Ilustración 2", text: "Ilustración 2." },
  { src: "/proyecto 5/MOCKUP33.png", alt: "Ilustración 3", text: "Ilustración 3." },
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
