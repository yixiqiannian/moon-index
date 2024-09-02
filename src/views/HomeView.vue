<template>
  <div class="home">
    <img class="tx" alt="Vue logo" src="../assets/dmn1.jpg" >
    <HelloWorld msg="Moon."/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src\

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
<style scoped>
  .home {
   
  }
  .tx {
    align-items: center;
    width: 80px;
    
    border-radius: 50%; /* 圆形头像 */  
    filter: drop-shadow(0 0 10px rgba(134, 229, 99, 0.8)); /* 发光效果 */  
    transition: filter 0.3s ease; /* 可选：添加过渡效果 */ 
  }
  .tx:hover {
    filter: drop-shadow(0 0 20px rgb(12, 184, 75));
  }
</style>
