<template>
  <div id="app">
    <navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import navbar from "./components/Navbar.vue";
export default {
  components: {
    navbar
  }
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content {
  padding: 1rem;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
