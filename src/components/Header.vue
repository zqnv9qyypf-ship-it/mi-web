<template>
  <header class="relative overflow-hidden text-white h-[calc(100svh-56px)] sm:h-[calc(100vh-64px)] flex flex-col justify-center items-start text-left px-4 py-5 sm:px-8 sm:py-8">
    <div class="relative z-10 w-full pt-0 md:pt-4 lg:pt-6">
      <h1 class="relative z-20 block w-full text-center text-[4.6rem] md:text-[7.5rem] lg:text-[13rem] leading-[0.9] font-bold text-white adobe-title mb-0 mt-8 md:mt-12 lg:mt-20">
        Portfolio
      </h1>
      <div class="-mt-24 md:-mt-32 lg:-mt-36 w-full flex justify-center relative z-30">
        <div class="relative mx-auto w-fit">
          <img
            src="/fresaa.png"
            alt="Imagen principal"
            class="block h-[70vh] md:h-[76vh] lg:h-[88vh] max-h-[calc(100svh-7rem)] sm:max-h-[calc(100vh-8rem)] w-auto max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-4rem)] object-contain"
          />

          <div class="absolute inset-0 z-40">
            <RouterLink
              to="/proyecto-1"
              class="absolute top-[45%] left-[62%] -translate-x-1/2 -translate-y-1/2 bg-white/20 text-white border border-white px-2.5 py-1 text-xs lg:px-3.5 lg:py-1.5 lg:text-sm font-semibold whitespace-nowrap"
            >
              Tipografía
            </RouterLink>
            <RouterLink
              to="/proyecto-2"
              class="absolute top-[52%] left-[20%] -translate-x-1/2 -translate-y-1/2 bg-white/20 text-white border border-white px-2.5 py-1 text-xs lg:px-3.5 lg:py-1.5 lg:text-sm font-semibold whitespace-nowrap"
            >
              Fotografía
            </RouterLink>
            <RouterLink
              to="/proyecto-3"
              class="absolute top-[65%] left-[36%] -translate-x-1/2 -translate-y-1/2 bg-white/20 text-white border border-white px-2.5 py-1 text-xs lg:px-3.5 lg:py-1.5 lg:text-sm font-semibold whitespace-nowrap"
            >
              Diseño
            </RouterLink>
            <RouterLink
              to="/proyecto-4"
              class="absolute top-[70%] left-[70%] -translate-x-1/2 -translate-y-1/2 bg-white/20 text-white border border-white px-2.5 py-1 text-xs lg:px-3.5 lg:py-1.5 lg:text-sm font-semibold whitespace-nowrap"
            >
              Maquetación
            </RouterLink>
            <RouterLink
              to="/proyecto-5"
              class="absolute top-[82%] left-[52%] -translate-x-1/2 -translate-y-1/2 bg-white/20 text-white border border-white px-2.5 py-1 text-xs lg:px-3.5 lg:py-1.5 lg:text-sm font-semibold whitespace-nowrap"
            >
              Ilustración
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
