<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="font-[Helvetica]">
    <nav class="w-full border-b border-black bg-white">
      <ul class="flex items-center">
        <li>
          <RouterLink to="/" class="menu-link" active-class="menu-link-active" exact-active-class="menu-link-active">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/proyectos" class="menu-link" active-class="menu-link-active">Proyectos</RouterLink>
        </li>
        <li>
          <RouterLink to="/sobre-mi" class="menu-link" active-class="menu-link-active">Sobre mi</RouterLink>
        </li>
        <li>
          <RouterLink to="/contacto" class="menu-link" active-class="menu-link-active">Contacto</RouterLink>
        </li>
      </ul>
    </nav>

    <RouterView />
  </main>
</template>

<style scoped>
.menu-link {
  display: inline-block;
  padding: 0.9rem 1.2rem;
  border-right: 1px solid black;
  color: black;
  text-decoration: none;
  font-weight: 600;
}

.menu-link-active {
  background: black;
  color: white;
}

.menu-link:active,
.menu-link:focus-visible {
  background: black;
  color: white;
}
</style>
