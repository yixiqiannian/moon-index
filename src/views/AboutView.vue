<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <About>666</About>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import About from '@/components/About.vue'; // @ is an alias to /src\

export default defineComponent({
  name: 'viewAbout',
  components: {
    About,
  },
});
</script>
