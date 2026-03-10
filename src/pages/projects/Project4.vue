<template>
  <section class="px-4 py-6 sm:p-8 min-h-[calc(100svh-56px)] sm:min-h-[calc(100vh-64px)] bg-white text-[#87CEEB]">
    <h1 class="text-3xl sm:text-4xl font-bold mb-3 adobe-title text-[#87CEEB]">Maquetación</h1>
    <p class="text-base sm:text-lg text-black mb-6">Para este proyecto tuve que maquetar un artículo en el que predominase la jerarquía y el buen diseño sobre la creatividad, aun que mateniendo a su vez la estética.</p>

    <div class="mx-auto w-full max-w-5xl">
      <div class="relative h-[72vh] overflow-hidden cursor-pointer" @click="nextSlide">
        <div
          class="flex h-full flex-col transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateY(-${currentIndex * 100}%)` }"
        >
          <article
            v-for="slide in slides"
            :key="slide.id"
            class="w-full h-full shrink-0 flex items-center justify-center"
          >
            <img
              :src="slide.src"
              :alt="slide.alt"
              class="w-full h-full object-contain rounded-md"
            />
          </article>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-center gap-2">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          type="button"
          class="h-2.5 w-2.5 rounded-full transition-colors"
          :class="index === currentIndex ? 'bg-[#87CEEB]' : 'bg-[#87CEEB]/30'"
          :aria-label="`Ir a la diapositiva ${index + 1}`"
          @click="goToSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"

const slides = [
  { id: 1, src: "/proyecto 1/proyecto 4/mockup1.png", alt: "Maquetación - mockup 1" },
  { id: 2, src: "/proyecto 1/proyecto 4/mockup2.png", alt: "Maquetación - mockup 2" },
]

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
