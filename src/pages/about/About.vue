<template>
  <section class="relative px-4 py-6 sm:p-8 min-h-[65svh] sm:min-h-[70vh] text-white">
    <div class="fixed top-[56px] sm:top-[64px] left-0 right-0 bottom-0 pointer-events-none z-0">
      <Star class="absolute top-[46%] left-[10%] text-red-500/80 fill-current" :size="12" />
      <Star class="absolute top-10 left-8 text-red-500/80 fill-current" :size="14" />
      <Star class="absolute top-16 right-12 text-red-500/80 fill-current" :size="18" />
      <Star class="absolute top-40 left-1/3 text-red-500/80 fill-current" :size="16" />
      <Star class="absolute top-[42%] right-[9%] text-red-500/80 fill-current" :size="13" />
      <Star class="absolute bottom-24 right-1/4 text-red-500/80 fill-current" :size="20" />
      <Star class="absolute top-[56%] left-[16%] text-red-500/80 fill-current" :size="15" />
      <Star class="absolute bottom-10 left-14 text-red-500/80 fill-current" :size="14" />
      <Star class="absolute bottom-12 right-8 text-red-500/80 fill-current" :size="16" />
    </div>

    <div class="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
      <div class="w-full lg:w-1/2 lg:pr-4">
        <div class="w-full rounded-lg border border-white/70 bg-white/20 p-5 text-white backdrop-blur-sm">
          <h1 class="inline-block px-2 py-1 text-5xl sm:text-6xl font-bold mb-5 text-white adobe-title">¡Hola! Soy Inés</h1>
          <p class="text-base sm:text-lg text-black mt-2">
            Mi nombre es Inés Pérez Cano y estudio Diseño y Tecnologías Creativas en la UPV. Me gusta crear proyectos con identidad propia combinando arte y tecnología, cuidando tanto la estética como la funcionalidad.
            En este portfolio comparto una selección de trabajos que reflejan mi proceso, mis referencias y mi forma
            de entender el diseño.
          </p>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-0 lg:-translate-x-24 lg:translate-y-16">
        <img
          src="/sobre mi/yop.png"
          alt="Foto de Inés"
          class="w-full max-w-sm sm:max-w-md lg:max-w-xl h-auto object-contain rounded-md"
        />
      </div>
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
