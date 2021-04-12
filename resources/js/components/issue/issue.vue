<template>
    <div>
        <component v-bind:is="'navbar'"></component>
        <div class="container">
            <form class="m-5">
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                        >Type of gun</label
                    >
                    <select
                        class="form-select form-select-lg w-75 p-2"
                        id="autoSizingSelect"
                    >
                        <option selected>Choose Gun Type...</option>
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
                    >
                        <option selected>Choose Purpose...</option>
                        <option value="1">Firing</option>
                        <option value="2">Maintainance</option>
                        <option value="3">Training</option>
                        <option value="4">Duty</option>
                    </select>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label"
                        >Select Duty</label
                    >
                    <select
                        class="form-select form-select-lg w-75 p-2"
                        id="autoSizingSelect"
                    >
                        <option selected>Choose Duty Type...</option>
                        <option value="1">On Duty</option>
                        <option value="2">On Station</option>
                    </select>
                </div>
                <div class="row mb-3">
                    <label for="autoSizingInput" class="col-sm-2 col-form-label"
                        >Body Number</label
                    >
                    <input
                        type="text"
                        class="form-select form-select-lg w-75 p-2"
                        id="autoSizingInput"
                        placeholder="Enter Body Number of the Gun"
                    />
                </div>
                <router-link class="btn btn-primary" to="/issueReport">
                    Lock
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
