<template>
  <b-alert
    id="alert"
    :variant="alertVariant"
    :show="showAlertDuration"
    @dismissed="showAlertDuration=0"
    dismissible
  >{{alertText}}</b-alert>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      alertText: "",
      alertVariant: "success",
      showAlertDuration: 0
    };
  },
  props: {
    title: String
  },
  methods: {
    showAlert(text, variant = "success") {
      this.alertText = text;
      this.alertVariant = variant;
      this.showAlertDuration = 5;
    }
  }
};
</script>

<style>
#alert {
  position: fixed;
  bottom: 0;
  right: 16px;
}
</style>