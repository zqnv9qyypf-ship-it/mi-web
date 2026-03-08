<template>
  <section class="px-4 py-6 sm:p-8 min-h-[calc(100svh-56px)] sm:min-h-[calc(100vh-64px)] bg-white text-[#87CEEB]">
    <h1 class="text-3xl sm:text-4xl font-bold mb-6 adobe-title">Proyecto 3. Diseño.</h1>
    <p class="text-base sm:text-lg mb-6 helvetica-text text-black">
      Carteles para la obra de teatro "Siete" sobre los siete pecados capitales, en este caso, la gula.
    </p>

    <div class="space-y-8">
      <div class="relative w-full max-w-4xl mx-auto">
        <img
          src="/proyecto 1/Pérez-Inés+Mena-Julia-cartelgeometria.jpg"
          alt="Cartel teatral geometría"
          class="w-full max-h-[86vh] h-auto object-contain transition-transform duration-500 ease-out cursor-pointer"
          :class="{ '-translate-x-8 sm:-translate-x-12': movedFirst }"
          @click="movedFirst = !movedFirst"
        />
        <p
          class="mt-2 text-sm md:text-base md:absolute md:left-[calc(100%-3rem)] md:ml-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-56 text-black transition-opacity duration-300"
          :class="movedFirst ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        >
          Construido digitalmente con una composición geométrica y contraste de color para reforzar la idea teatral. Cartel realizado junto a Julia Mena.
        </p>
      </div>

      <div class="relative w-full max-w-4xl mx-auto">
        <img
          src="/proyecto 1/PerezCano-Ines+MenaPerezJulia-cartelfinal-sinreticula.jpg"
          alt="Cartel teatral final"
          class="w-full max-h-[86vh] h-auto object-contain transition-transform duration-500 ease-out cursor-pointer"
          :class="{ '-translate-x-8 sm:-translate-x-12': movedSecond }"
          @click="movedSecond = !movedSecond"
        />
        <p
          class="mt-2 text-sm md:text-base md:absolute md:left-[calc(100%-3rem)] md:ml-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-56 text-black transition-opacity duration-300"
          :class="movedSecond ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        >
          Realizado con fotografía propia utilizando lo desagradable como manera de transmitir el ansia por comer. Cartel realizado junto a Julia Mena.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const movedFirst = ref(false)
const movedSecond = ref(false)
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}

.helvetica-text {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
