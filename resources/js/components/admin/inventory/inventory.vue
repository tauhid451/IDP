<template>
  <div>
    <component v-bind:is="'navbar'"></component>
    <div class="container">
      <form action="#">
        <select
          class="mt-5 form-select form-select-lg w-75 p-2"
          aria-label="Default select example"
          v-model="gunCategory"
          @change="getData"
        >
          <option selected value="-1">Choose Gun Type...</option>
          <option value="bd-08">BD-08</option>
          <option value="lmg">LMG</option>
          <option value="smg">SMG</option>
          <option value="pistol">Pistol</option>
          <option value="g3">G3</option>
        </select>
        <button class="btn btn-primary m-5 p-2">Search</button>
      </form>
    </div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <h1>Search Results</h1>
      </div>
      <div class="mt-3 d-flex justify-content-between">
        <div>
          <div>Kote: 10232</div>
          <div>Kote NCO: 10203</div>
        </div>
      </div>

      <div class="mt-3" v-if="gunList.length > 0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">Issued By</th>
              <th scope="col">Issued On</th>
              <th scope="col">DepositionTime</th>
              <th scope="col">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(val, i) in gunList" :key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ val.name }}</td>
              <td>{{ val.issue_time }}</td>
              <td>{{ val.deposite_time ? val.deposite_time : "N/A" }}</td>
              <td>{{ val.purpose }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gunCategory: "-1",
      gunList: [],
      loading: false,
    };
  },
  methods: {
    getData() {
      let url = "/api/admin/issue/" + this.gunCategory;
      axios
        .get(url)
        .then((res) => {
          this.gunList = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
