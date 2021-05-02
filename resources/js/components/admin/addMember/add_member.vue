<template>
  <div>
    <component v-bind:is="'navbar'"></component>

    <div class="container mt-5">
      <div class="row text-center justify-content-center">
        <div class="col-3">
          <img src="/img/add-member.png" style="width: 90%" />
          <h3 class="mt-3">Add New User</h3>
        </div>
      </div>
      <div class="row justify-content-center mt-5 mb-5">
        <div class="col-8">
          <form @submit.prevent="submitData">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Name"
              />
            </div>

            <div class="form-group">
              <label>Rfid No</label>
              <input
                type="text"
                v-model="rfid"
                class="form-control"
                placeholder="Rfid"
              />
            </div>

            <div class="form-group">
              <label>Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="Enter email"
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                placeholder="Password"
              />
            </div>

            <div class="form-group">
              <label>Gun No</label>
              <input
                type="text"
                v-model="gunNo"
                class="form-control"
                placeholder="Gun No"
              />
            </div>

            <div class="form-group">
              <label>Soldier No</label>
              <input
                type="text"
                v-model="soldierNo"
                class="form-control"
                placeholder="Soldier No"
              />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      gunNo: "",
      rfid: "",
      soldierNo: "",
    };
  },
  methods: {
    submitData() {
      let formData = new FormData();
      formData.set("name", this.name);
      formData.set("email", this.email);
      formData.set("password", this.password);
      formData.set("gunNo", this.gunNo);
      formData.set("rfid", this.rfid);
      formData.set("soldierNo", this.soldierNo);

      let url = "/api/admin/add-user";
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res);
          window.location.href = "/home";
        })
        .catch((err) => {
          alert("Error!");
        });
    },
  },
};
</script>

<style>
</style>