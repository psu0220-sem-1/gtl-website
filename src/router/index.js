import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Materials from "../pages/Materials.vue";
import Volumes from "../pages/Volumes.vue";
import Addresses from "../pages/Addresses.vue";
import VolumeForm from "../components/volume/VolumeForm.vue";
import AddressForm from "../components/address/AddressForm.vue";
import constants from "../constants";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: constants.routes.MATERIALS_PAGE,
    name: "Materials",
    component: Materials,
  },
  {
    path: constants.routes.VOLUMES_PAGE,
    name: "Volumes",
    component: Volumes,
  },
  {
    path: constants.routes.ADDRESSES_PAGE,
    name: "Addresses",
    component: Addresses,
  },
  {
    path: constants.routes.CREATE_VOLUME,
    component: VolumeForm,
  },
  {
    path: constants.routes.CREATE_ADDRESS,
    component: AddressForm,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
