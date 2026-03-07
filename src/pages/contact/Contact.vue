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

    <div class="relative z-10">
      <h1 class="inline-block px-2 py-1 text-3xl sm:text-4xl font-bold mb-3 text-white adobe-title">¡Contactame!</h1>
      <p class="text-base sm:text-lg text-black">Escribeme para colaboraciones o nuevos proyectos.</p>

      <div class="mt-6 w-full max-w-xl mx-auto rounded-lg border border-white/70 bg-white/20 p-5 text-white backdrop-blur-sm">
        <p class="text-sm sm:text-base mb-2 flex items-center gap-2">
          <Phone :size="16" />
          <span><span class="font-semibold">Telefono:</span> <a href="tel:+34603454656" class="underline">603 454 656</a></span>
        </p>
        <p class="text-sm sm:text-base mb-2 flex items-center gap-2">
          <Mail :size="16" />
          <span><span class="font-semibold">Correo:</span> <a href="mailto:inesperezcano6@gmail.com" class="underline">inesperezcano6@gmail.com</a></span>
        </p>
        <p class="text-sm sm:text-base"><span class="font-semibold">Disponible para:</span> colaboraciones creativas, identidad visual y proyectos digitales.</p>

        <form class="mt-6 space-y-3">
          <div>
            <label for="name" class="block text-sm font-semibold mb-1">Nombre</label>
            <input id="name" type="text" class="w-full rounded-md border border-white/60 bg-white/90 px-3 py-2 text-black placeholder:text-gray-500" placeholder="Tu nombre" />
          </div>
          <div>
            <label for="email" class="block text-sm font-semibold mb-1">Correo</label>
            <input id="email" type="email" class="w-full rounded-md border border-white/60 bg-white/90 px-3 py-2 text-black placeholder:text-gray-500" placeholder="tuemail@ejemplo.com" />
          </div>
          <div>
            <label for="message" class="block text-sm font-semibold mb-1">Mensaje</label>
            <textarea id="message" rows="4" class="w-full rounded-md border border-white/60 bg-white/90 px-3 py-2 text-black placeholder:text-gray-500" placeholder="Cuéntame sobre tu proyecto"></textarea>
          </div>
          <button type="submit" class="rounded-md border border-white bg-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/30">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Phone } from 'lucide-vue-next'
import { Star } from 'lucide-vue-next'
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
