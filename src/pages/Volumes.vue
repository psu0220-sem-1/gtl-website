<template>
  <div>
    <h1>Volumes</h1>
    <b-button :to="createVolumePath">Create volume</b-button>
    <b-alert
      variant="success"
      :show="showSuccessAlert"
      @dismissed="showSuccessAlert=0"
    >Volume deleted successfully</b-alert>
    <b-alert
      variant="danger"
      :show="showErrorAlert"
      @dismissed="showErrorAlert=0"
    >Couldn't delete volume</b-alert>

    <b-table :fields="fields" :items="volumes">
      <template v-slot:cell(delete)="data">
        <b-button variant="danger" @click="handleDelete(data)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import constants from "../constants";
export default {
  name: "Volumes",
  data() {
    return {
      fields: [
        { key: "id", name: "Id" },
        { key: "homeLocation", name: "Home location" },
        { key: "currentLocation", name: "Current Location" },
        { key: "material", name: "Material" },
        { key: "isbn", name: "ISBN" },
        { key: "delete", name: "Delete" }
      ],
      showSuccessAlert: 0,
      showErrorAlert: 0,
      createVolumePath: constants.routes.CREATE_VOLUME
    };
  },
  computed: mapState({
    volumes: state => state.volumes.volumes
  }),
  methods: {
    ...mapActions(["fetchVolumes", "deleteVolume"]),
    handleDelete(data) {
      console.log(data.item.id);
      this.deleteVolume(data.item.id)
        .then(() => {
          console.log("deleted");
          this.showSuccessAlert = 3;
        })
        .catch(err => {
          console.log("err delete", err);
          this.showErrorAlert = 3;
        });
    }
  },
  created() {
    this.fetchVolumes();
  }
};
</script>

<style></style>
