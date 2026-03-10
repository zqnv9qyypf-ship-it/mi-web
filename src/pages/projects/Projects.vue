<template>
  <section class="relative px-4 py-6 sm:p-8 min-h-[65svh] sm:min-h-[70vh] text-white">
    <div class="relative z-10">
      <h1 class="inline-block px-2 py-1 text-3xl sm:text-4xl font-bold mb-3 text-white adobe-title">Proyectos</h1>
      <p class="text-base sm:text-lg text-[#3b2a1a]">Aqui veras una seleccion de mis trabajos.</p>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <RouterLink
          v-for="project in projects"
          :key="project.slug"
          :to="project.to"
          class="block rounded-lg border border-white/70 bg-white/20 p-4 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        >
          <h2 class="text-lg font-semibold mb-1">{{ project.title }}</h2>
          <p class="text-sm text-[#3b2a1a]">{{ project.subtitle }}</p>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"

const projects = [
  { slug: "1", title: "Tipografia", subtitle: "Proyecto 1", to: "/proyectos/1" },
  { slug: "2", title: "Fotografia", subtitle: "Proyecto 2", to: "/proyectos/2" },
  { slug: "3", title: "Diseno", subtitle: "Proyecto 3", to: "/proyectos/3" },
  { slug: "4", title: "Maquetacion", subtitle: "Proyecto 4", to: "/proyectos/4" },
  { slug: "5", title: "Ilustracion", subtitle: "Proyecto 5", to: "/proyectos/5" },
]
</script>

<style scoped>
.adobe-title {
  font-family: "Bigfish", "bigfish", Helvetica, Arial, sans-serif;
}
</style>
