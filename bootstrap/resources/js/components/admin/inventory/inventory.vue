<template>
    <div>
        <component v-bind:is="'navbar'"></component>
        <div class="container">
            <form action="#">
                <select
                    class="mt-5 form-select form-select-lg w-75 p-2"
                    aria-label="Default select example"
                >
                    <option selected>Select Gun Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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

            <div class="mt-3">
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
                        <tr>
                            <td>AK-47</td>
                            <td>12</td>
                            <td>22</td>
                            <td>32</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>AK-47</td>
                            <td>12</td>
                            <td>22</td>
                            <td>32</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>AK-47</td>
                            <td>12</td>
                            <td>22</td>
                            <td>32</td>
                            <td>92</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
