<template>
  <nav>
    Georgia Tech Library
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="materialsRoute">Materials</router-link>
      </li>
      <li>
        <router-link :to="volumesRoute">Volumes</router-link>
      </li>
      <li>
        <router-link :to="addressesRoute">Addresses</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import constants from "../constants";
export default {
  name: "Navbar",
  data() {
    return {
      materialsRoute: constants.routes.MATERIALS_PAGE,
      volumesRoute: constants.routes.VOLUMES_PAGE,
      addressesRoute: constants.routes.ADDRESSES_PAGE
    };
  }
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