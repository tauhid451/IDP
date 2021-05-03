<template>
    <div>
        <component v-bind:is="'navbar'"></component>
        <div class="row mt-5 mx-5">
            <div class="col-sm">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Maintainance</h5>
                        <router-link to="/issue" class="btn btn-primary"
                            >Go Maintainance</router-link
                        >
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Report</h5>
                        <router-link to="/issue" class="btn btn-primary"
                            >Go Report</router-link
                        >
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Issue Or Deposit</h5>
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

<style></style>
