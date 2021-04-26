<template>
  <div>
    <component v-bind:is="'navbar'"></component>
    <div class="row mt-5 mx-5">
      <div class="col-sm">
        <div class="card">
          <div class="card-body text-center">
            <img src="/img/maintainance.png" class="card-img" />
            <h5 class="card-title mt-3">Maintainance</h5>
            <router-link to="/issue" class="btn btn-primary"
              >Go Maintainance</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <div class="card-body text-center">
            <img src="/img/inventory.png" class="card-img" />
            <h5 class="card-title mt-3">Inventory</h5>
            <router-link to="/inventory" class="btn btn-primary"
              >Go Inventory</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <div class="card-body text-center">
            <img src="/img/report.png" class="card-img" />
            <h5 class="card-title mt-3">Report</h5>
            <router-link to="/report" class="btn btn-primary"
              >Go Report</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <div class="card-body text-center">
            <img src="/img/deposit.png" class="card-img" />
            <h5 class="card-title mt-3">Issue Or Deposit</h5>
            <router-link to="/issue" class="btn btn-primary"
              >Go Issue Or Deposit</router-link
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
