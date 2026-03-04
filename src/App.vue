<script setup lang="ts">
import { Armchair } from 'lucide-vue-next'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="font-[Helvetica]">
    <nav class="w-full border-b border-black bg-white">
      <ul class="flex flex-wrap items-center gap-1 px-2 py-2 sm:gap-2 sm:px-4 sm:py-3">
        <li>
          <RouterLink to="/" class="menu-link" active-class="menu-link-active" exact-active-class="menu-link-active" aria-label="Home">
            <Armchair :size="20" class="menu-icon-home" />
          </RouterLink>
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.75rem;
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1;
}

@media (min-width: 640px) {
  .menu-link {
    padding: 0.8rem 1.1rem;
    font-size: 1rem;
  }
}

.menu-link-active {
  background: transparent;
  color: black;
}

.menu-link:active,
.menu-link:focus-visible {
  background: transparent;
  color: black;
}

.menu-icon-home {
  position: relative;
  top: 2px;
}
</style>
