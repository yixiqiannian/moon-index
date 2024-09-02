<template>
  <nav>
    <!-- <router-link to="/">Moon</router-link>  -->
    <!-- <router-link to="/about">关于Moon</router-link>  -->
    <!-- <router-link to="/viewabout">ViewAbout</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c2cbd3;
  background-image: url('../src/assets/2024112224.png');
  background-color: #434f65;
  background-position: 100%;
  background-size: cover;
}
@media(max-width:600px){
    #app {
      background-image: url('../src/assets/66.jpg');
      color: #f4f2ef;
      filter: drop-shadow(0 0 10px rgba(134, 229, 99, 0.8)); /* 发光效果 */  
    transition: filter 0.3s ease; /* 可选：添加过渡效果 */ 
  }
  }
a {
  text-transform: none
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #b0c7df;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
