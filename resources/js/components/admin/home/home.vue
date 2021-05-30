<template>
  <div id="app"  style="background-image:url('images/demo/backgrounds/01.png'); height:50rem; background-repeat:no-repeat;background-size:cover;background-position:center center;background-attachment:fixed;"> 
    <component v-bind:is="'navbar'"></component>
    
    <div class="row mt-5 mx-5" style="margin-top:2rem !important;"> 
      <div class="col-6">
        <div class="card" style="background-image:url('images/demo/dashboard/adduser.jpg'); border: 4px solid rgb(29 58 37)">
          <div class="card-body text-center">
            <img src="/img/add-member.png" class="card-img" />
            <h3 class="card-title mt-3" style="color:white; text-shadow: 2px 2px #5e23d2; font-weight:bold">Add member</h3>
            <router-link to="/add-member" class="btn btn-primary"
              >Add member</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card" style="background-image:url('images/demo/dashboard/issue.jpg'); border: 4px solid rgb(29 58 37)">
          <div class="card-body text-center">
            <img src="/img/deposit.png" class="card-img" />
            <h3 class="card-title mt-3" style="color:white; text-shadow: 2px 2px #5e23d2; font-weight:bold">Issue Or Deposit</h3>
            <router-link to="/issue" class="btn btn-primary"
              >Go Issue Or Deposit</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-4 mt-4">
        <div class="card" style="background-image:url('images/demo/dashboard/maintenance.jpg'); border: 4px solid rgb(29 58 37)">
          <div class="card-body text-center">
            <img src="/img/maintainance.png" class="card-img" />
            <h3 class="card-title mt-3" style="color:white; text-shadow: 2px 2px #5e23d2; font-weight:bold">Maintainance</h3>
            <router-link to="/issue" class="btn btn-primary"
              >Go Maintainance</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-4 mt-4">
        <div class="card" style="background-image:url('images/demo/dashboard/inventory.jpg'); border: 4px solid rgb(29 58 37)">
          <div class="card-body text-center">
            <img src="/img/inventory.png" class="card-img" />
            <h3 class="card-title mt-3" style="color:white; text-shadow: 2px 2px #5e23d2; font-weight:bold">Inventory</h3>
            <router-link to="/inventory" class="btn btn-primary"
              >Go Inventory</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-4 mt-4">
        <div class="card" style="background-image:url('images/demo/dashboard/report.jpg'); border: 4px solid rgb(29 58 37)">
          <div class="card-body text-center">
            <img src="/img/report.png" class="card-img" />
            <h3 class="card-title mt-3" style="color:white; text-shadow: 2px 2px #5e23d2; font-weight:bold">Report</h3>
            <router-link to="/report" class="btn btn-primary"
              >Go Report</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-img {
  max-width: 100%;
  height: 150px;
  object-fit: contain;
}
</style>
