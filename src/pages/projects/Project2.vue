<template>
  <section class="px-4 py-6 sm:p-8 min-h-[calc(100svh-56px)] sm:min-h-[calc(100vh-64px)] bg-white text-[#87CEEB]">
    <h1 class="text-3xl sm:text-4xl font-bold mb-3 adobe-title text-[#87CEEB]">Proyecto 2. Fotografía.</h1>
    <p class="text-base sm:text-lg text-black mb-6">En grupo, realizamos una sesión de fotos inspirada en el fotógrafo Martin Parr.</p>

    <div class="mx-auto w-full max-w-6xl">
      <div
        class="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-transparent cursor-pointer"
        @click="nextSlide"
      >
        <div class="flex h-full transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <article
            v-for="slide in slides"
            :key="slide.id"
            class="w-full h-full shrink-0 flex flex-col items-center justify-center px-4 py-4 text-center"
          >
            <img
              :src="slide.src"
              :alt="slide.alt"
              class="h-full w-full object-contain"
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

    <p class="text-base sm:text-lg text-black mt-6 max-w-5xl mx-auto text-center">
      Martin Parr es un artista que usa un tono muy irónico. Tiene una forma muy directa de mostrar lo absurdo de lo cotidiano, sin necesidad de exagerar. Su mirada crítica, pero sin dramatismo, consigue que uno se ría y, al mismo tiempo, se dé cuenta de lo ridículo que puede ser lo que damos por normal. Técnicamente, destaca por el uso del flash y los colores saturados, que refuerzan ese efecto exagerado y casi grotesco de la realidad que retrata.
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"

const slides = [
  { id: 2, src: "/proyecto 2/piesplaya.png", alt: "Proyecto 2 - pies playa" },
  { id: 6, src: "/proyecto 2/ilovegreece.png", alt: "Proyecto 2 - i love greece" },
  { id: 3, src: "/proyecto 2/piespablo.png", alt: "Proyecto 2 - pies pablo" },
  { id: 5, src: "/proyecto 2/beatles.png", alt: "Proyecto 2 - beatles" },
  { id: 1, src: "/proyecto 2/maleta.png", alt: "Proyecto 2 - maleta" },
  { id: 4, src: "/proyecto 2/dino.png", alt: "Proyecto 2 - dino" },
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
