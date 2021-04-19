<template>
  <div>
    <component v-bind:is="'navbar'"></component>
    <div class="container">
      <div v-if="showInputForm" class="m-5">
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label"
            >Type of gun</label
          >
          <select
            class="form-select form-select-lg w-75 p-2"
            id="autoSizingSelect"
            v-model="gunType"
          >
            <option selected value="-1">Choose Gun Type...</option>
            <option value="1">BD-08</option>
            <option value="2">LMG</option>
            <option value="3">SMG</option>
            <option value="4">Pistol</option>
            <option value="5">G3</option>
          </select>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >Select Purpose</label
          >
          <select
            class="form-select form-select-lg w-75 p-2"
            id="autoSizingSelect"
            v-model="purpose"
          >
            <option selected value="-1">Choose Purpose...</option>
            <option value="firing">Firing</option>
            <option value="maintainance">Maintainance</option>
            <option value="training">Training</option>
            <option value="duty">Duty</option>
          </select>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >Select Duty</label
          >
          <select
            class="form-select form-select-lg w-75 p-2"
            id="autoSizingSelect"
            v-model="duty"
          >
            <option selected value="-1">Choose Duty Type...</option>
            <option value="on duty">On Duty</option>
            <option value="on station">Out Station</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="unlockGun">Unlock</button>
      </div>
      <div v-else class="m-5 text-center">
        <h3>Insert RFID</h3>
        <input type="text" v-model="rfid" autofocus />
        <div class="mt-3">
          <button
            class="btn btn-primary"
            @click="rfid.length > 0 ? (showInputForm = true) : ''"
          >
            Issue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rfid: "",
      gunType: "-1",
      purpose: "-1",
      duty: "-1",

      showInputForm: false,
    };
  },
  methods: {
    unlockGun() {
      let formData = new FormData();
      formData.set("gun_id", this.gunType);
      formData.set("purpose", this.purpose);
      formData.set("duty", this.duty);
      formData.set("rfid", this.rfid);
      let url = "/api/admin/issue";
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res);
          alert("Issued!");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
