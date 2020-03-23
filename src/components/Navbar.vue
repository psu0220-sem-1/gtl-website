<template>
  <nav>
    Georgia Tech Library
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/materials">Materials</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  box-shadow: 1px -3px 10px rgb(192, 192, 192);
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  li {
    margin: 0 16px;
    a {
      padding: 0.25rem;
    }
  }
  .router-link-exact-active {
    border-bottom: 2px solid gray;
  }
}
</style>