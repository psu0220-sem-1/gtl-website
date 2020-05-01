<template>
  <div>
    <Alert ref="alertRef" />
    <FormWrapper title="Address form">
      <b-form @submit="submitForm">
        <b-form-group id="input-group-1" label="Address:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.street"
            type="text"
            required
            placeholder="Street name and number"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Additional info:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.additionalInfo"
            type="text"
            required
            placeholder="Floor, apartment number"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Zip code:">
          <b-form-input id="input-1" v-model="form.zip" type="text" required placeholder="Zip code"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </FormWrapper>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FormWrapper from "../shared/FormWrapper";
import Alert from "../shared/Alert";
export default {
  name: "AddressForm",
  components: {
    FormWrapper,
    Alert
  },
  data() {
    return {
      form: {
        street: "",
        additionalInfo: "",
        zip: null
      }
    };
  },
  methods: {
    ...mapActions(["postAddress"]),
    submitForm(e) {
      e.preventDefault();
      console.log("address subm");
      const addressData = {
        street: this.form.street,
        additionalInfo: this.form.additionalInfo,
        zip: parseInt(this.form.zip)
      };
      console.log(addressData);

      this.postAddress(addressData)
        .then(() => {
          this.$refs.alertRef.showAlert("Address created");
          this.form.street = "";
          this.form.additionalInfo = "";
          this.form.zip = "";
        })
        .catch(err => {
          this.$refs.alertRef.showAlert(err, "danger");
        });
    }
  }
};
</script>

<style></style>
