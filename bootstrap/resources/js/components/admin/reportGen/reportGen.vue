<template>
    <div>
        <component v-bind:is="'navbar'"></component>
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1>Report</h1>
            </div>
            <div class="mt-3 d-flex justify-content-between">
                <div>
                    <div>Date: 10/01/21</div>
                    <div>Time of Opening Kate: 10.00 am</div>
                    <div>Time of Closing Kate: 10.00 pm</div>
                </div>
                <div>
                    <div>Kote: 10232</div>
                    <div>Kote NCO: 10203</div>
                </div>
            </div>

            <div class="mt-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Weapon</th>
                            <th scope="col">In Kote</th>
                            <th scope="col">On Duty</th>
                            <th scope="col">Out Station</th>
                            <th scope="col">Total</th>
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
