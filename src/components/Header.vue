<template>
  <header class="relative overflow-hidden text-black h-[calc(100svh-56px)] sm:h-[calc(100vh-64px)] flex flex-col justify-center items-start text-left px-4 py-5 sm:px-8 sm:py-8">
    <div class="absolute inset-0 pointer-events-none z-0">
      <Star class="absolute top-8 left-6 text-red-500/90 fill-current" :size="16" :stroke-width="1.8" />
      <Star class="absolute top-14 right-10 text-red-500/90 fill-current" :size="22" :stroke-width="1.8" />
      <Star class="absolute top-28 left-1/3 text-red-500/90 fill-current" :size="18" :stroke-width="1.8" />
      <Star class="absolute top-40 right-1/4 text-red-500/90 fill-current" :size="24" :stroke-width="1.8" />
      <Star class="absolute bottom-28 left-10 text-red-500/90 fill-current" :size="20" :stroke-width="1.8" />
      <Star class="absolute bottom-20 right-16 text-red-500/90 fill-current" :size="20" :stroke-width="1.8" />
      <Star class="absolute bottom-10 left-1/2 text-red-500/90 fill-current" :size="16" :stroke-width="1.8" />
      <Star class="absolute bottom-8 right-8 text-red-500/90 fill-current" :size="18" :stroke-width="1.8" />
    </div>

    <div class="relative z-10 w-full pt-4 md:pt-8 lg:pt-10">
      <h1 class="relative z-20 block w-full text-center text-[4.6rem] md:text-[7.5rem] lg:text-[13rem] leading-[0.9] font-bold text-black adobe-title mb-0 mt-8 md:mt-12 lg:mt-20">
        Portfolio
      </h1>
      <div class="-mt-24 md:-mt-32 lg:-mt-36 w-full flex justify-center relative z-30">
        <div class="relative mx-auto w-fit">
          <img
            src="/fresaa.png"
            alt="Imagen principal"
            class="block h-[70vh] md:h-[76vh] lg:h-[88vh] max-h-[calc(100svh-7rem)] sm:max-h-[calc(100vh-8rem)] w-auto max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-4rem)] object-contain"
          />

          <div class="absolute z-40 top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
            <button
              type="button"
              class="bg-[#fcfaf6] text-black border border-black px-2.5 py-1 text-xs font-semibold whitespace-nowrap"
            >
              Proyecto 1
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Star } from 'lucide-vue-next'

export default defineComponent({
  name: 'Header',
  components: { Star }
})
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
