<template>
  <div>
    Volumes page

    <b-table :items="volumes"></b-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Volumes",
  computed: mapState({
    volumes: (state) => state.volumes.volumes,
  }),
  methods: {
    ...mapActions(["fetchVolumes"]),
  },
  created() {
    this.fetchVolumes();
  },
};
</script>

<style></style>
