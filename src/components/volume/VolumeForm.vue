<template>
  <div>
    <Alert ref="alertRef" />
    <FormWrapper title="Volume form">
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Volume Id:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.volumeId"
            type="text"
            placeholder="Volume id"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Material Id:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.materialId"
            type="text"
            required
            placeholder="Material id"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Home location:">
          <template v-slot:description>
            Can't find the address? Create one
            <router-link to="/address/create">here</router-link>
          </template>
          <b-form-select
            v-model="form.homeLocation"
            :options="locations"
            required
            value-field="id"
            text-field="info"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="Current location">
          <b-form-select
            v-model="form.currentLocation"
            :options="locations"
            required
            value-field="id"
            text-field="info"
          ></b-form-select>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </FormWrapper>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import FormWrapper from "../shared/FormWrapper";
import Alert from "../shared/Alert";
export default {
  name: "VolumeForm",
  data() {
    return {
      form: {
        volumeId: "",
        materialId: "",
        homeLocation: null,
        currentLocation: null
      }
    };
  },
  components: {
    FormWrapper,
    Alert
  },
  computed: {
    ...mapGetters(["oneLineAddresses"]),
    ...mapState({
      volume: state => state.volumes.volume
    }),
    locations() {
      return [
        { id: null, info: "Select a location" },
        ...this.oneLineAddresses
      ];
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const volumeData = {
        materialId: parseInt(this.form.materialId),
        homeLocationId: this.form.homeLocation,
        currentLocationId: this.form.currentLocation
      };
      console.log("submitted", volumeData);
      this.postVolume(volumeData)
        .then(() => {
          this.form.materialId = "";
          this.form.homeLocation = null;
          this.form.currentLocation = null;
          this.$refs.alertRef.showAlert("Volume created");
        })
        .catch(() => {
          this.$refs.alertRef.showAlert("Error creating volume", "danger");
        });
    },
    ...mapActions(["fetchAddresses", "postVolume", "fetchVolume"])
  },
  created() {
    this.fetchAddresses();
    console.log("id", this.$route.params.id);
    if (this.$route.params.id) {
      this.fetchVolume(this.$route.params.id);
    }
  }
};
</script>

<style></style>
