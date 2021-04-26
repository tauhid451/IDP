<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="background-color: #d0f5ea !important"
  >
    <a class="navbar-brand" href="#">Arsenal Maintenance System</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="btn btn-outline-dark rounded mx-1 my-1">
          <router-link tag="a" class="nav-link" to="/about">About</router-link>
        </li>
        <li class="btn btn-outline-dark rounded mx-1 my-1">
          <router-link tag="a" class="nav-link" to="/home"
            >Home</router-link
          >
        </li>
        <li class="btn btn-outline-dark rounded mx-1 my-1">
          <a href="/logout" class="nav-link">Logout</a>
        </li>
        <!-- <template v-if="this.$store.state.role == 'admin'">
                    <li class="btn btn-outline-dark rounded mx-1 my-1">
                        <router-link tag="a" class="nav-link" to="/admin/home"
                            >Home</router-link
                        >
                    </li>
                    <li class="btn btn-outline-dark rounded mx-1 my-1">
                        <a class="nav-link" href="/logout">Logout</a>
                    </li>
                </template> -->
        <!-- Employee -->
        <!-- <template v-if="this.$store.state.role == 'employee'">
                    <li class="btn btn-outline-dark rounded mx-1 my-1">
                        <a class="nav-link" href="/logout">Logout</a>
                    </li>
                </template> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  created() {
    //console.log(this.$store.state.role);
  },
};
</script>

<style scoped>
a:hover {
  color: #fff !important;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
