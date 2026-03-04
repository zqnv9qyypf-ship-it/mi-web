<template>
  <div>
    <Header />
    <div class="p-8">
      <Armchair :size="20" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Armchair } from 'lucide-vue-next'
import Header from '../../components/Header.vue'

export default defineComponent({
  name: 'Home',
  components: { Armchair, Header }
})
</script>
