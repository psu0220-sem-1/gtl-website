<template>
  <div>
    <h1>Addresses</h1>
    <Alert ref="alertRef" />
    <b-button :to="createAddressRoute">Create address</b-button>
    <b-table :fields="fields" :items="addresses">
      <template v-slot:cell(delete)="data">
        <b-button variant="danger" @click="handleDelete(data)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import Alert from "../components/shared/Alert";
import { mapActions, mapState } from "vuex";
import constants from "../constants";
export default {
  name: "Addresses",
  data() {
    return {
      createAddressRoute: constants.routes.CREATE_ADDRESS,
      fields: [
        {
          key: "id",
          name: "Id"
        },
        {
          key: "street",
          name: "Street name"
        },
        {
          key: "additionalInfo",
          name: "Additional info"
        },
        {
          key: "zip",
          name: "Zip code"
        },
        {
          key: "delete",
          name: "Delete"
        }
      ]
    };
  },
  components: {
    Alert
  },
  computed: mapState({
    addresses: state => state.address.addresses
  }),
  methods: {
    ...mapActions(["fetchAddresses", "deleteAddress"]),
    handleDelete(data) {
      console.log("delete address", data.item.id);
      this.deleteAddress(data.item.id)
        .then(() => {
          this.$refs.alertRef.showAlert("Address deleted");
        })
        .catch(() => {
          this.$refs.alertRef.showAlert("Error deleting", "danger");
        });
    }
  },
  created() {
    this.fetchAddresses();
  }
};
</script>

<style>
</style>