<template>
     <div id="app"  style="background-image:url('images/demo/backgrounds/adduserback.jpg'); height:50rem; background-repeat:no-repeat;background-size:cover;background-position:center center;background-attachment:fixed;"> 
    <component v-bind:is="'navbar'"></component>

    <div class="container mt-5" style="background-color:#ffffff80">
      <div class="row text-center justify-content-center">
        <div class="col-3" style="    max-width: 20%;margin-top: 10rem;margin-right: 7rem;">
          <img src="/img/add-member.png" style="width: 90%" />
          <h3 class="mt-3">Add New User</h3>
        </div>
                <div class="col-5">
          <form @submit.prevent="submitData">
            <div class="form-group">
              <label style="display:flex">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Name"
              />
            </div>

            <div class="form-group">
              <label style="display:flex">Rfid No</label>
              <input
                type="text"
                v-model="rfid"
                class="form-control"
                placeholder="Rfid"
              />
            </div>

            <div class="form-group">
              <label style="display:flex">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="Enter email"
              />
            </div>

            <div class="form-group">
              <label style="display:flex">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                placeholder="Password"
              />
            </div>

            <div class="form-group">
              <label style="display:flex">Gun No</label>
              <input
                type="text"
                v-model="gunNo"
                class="form-control"
                placeholder="Gun No"
              />
            </div>

            <div class="form-group">
              <label style="display:flex">Soldier No</label>
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