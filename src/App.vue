<script setup lang="ts">
import { Armchair } from 'lucide-vue-next'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="font-[Helvetica] bg-[#87CEEB] min-h-screen">
    <nav class="w-full border-b border-white bg-[#87CEEB]">
      <ul class="flex w-full flex-wrap items-center justify-start gap-1 px-2 py-2 sm:gap-2 sm:px-4 sm:py-3">
        <li>
          <RouterLink to="/" class="menu-link" active-class="menu-link-active" exact-active-class="menu-link-active" aria-label="Home">
            <Armchair :size="20" class="menu-icon-home" />
          </RouterLink>
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
  padding: 0.55rem 0.7rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.86rem;
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
  color: rgb(239 68 68 / 0.9);
  font-weight: 700;
}

.menu-link:active,
.menu-link:focus-visible {
  background: transparent;
  color: rgb(239 68 68 / 0.9);
}

.menu-icon-home {
  position: relative;
  top: 2px;
}
</style>
