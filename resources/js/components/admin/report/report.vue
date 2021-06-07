<template>
    <div>
        <component v-bind:is="'navbar'"></component>
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="w-75">
                    <div class="d-flex justify-content-center">
                        <img class="w-25 h-25" alt="logo" src="./logo.jpeg" />
                    </div>
                    <div class="d-flex justify-content-center">
                        <h1>Admin Panel</h1>
                    </div>
                    <div>
                        <form>
                            <div class="mb-4 d-flex flex-column">
                                <label for="kote" class="font-weight-bold"
                                    >Kote</label
                                >
                                Kote ID
                            </div>
                            <div class="mb-4 d-flex flex-column">
                                <label for="opening_kote"
                                    >Time of Opening Kote</label
                                >
                                <input
                                    type="date"
                                    v-model="fromDate"
                                    name="opening_kote"
                                    id="opening_kote"
                                />
                            </div>
                            <div class="mb-4 d-flex flex-column">
                                <label for="closing_kote"
                                    >Time of closing Kote</label
                                >
                                <input
                                    type="date"
                                    v-model="toDate"
                                    name="closing_kote"
                                    id="closing_kote"
                                />
                            </div>
                            <div class="d-flex justify-content-center">
                                <button
                                    @click.prevent="getData"
                                    class="btn btn-primary"
                                >
                                    Go Report
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="generate" class="container">
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
                            <td>Rifle</td>
                            <td>
                                {{
                                    rifleCount - (rifleOnDuty + rifleOnStation)
                                }}
                            </td>
                            <td>{{ rifleOnDuty }}</td>
                            <td>{{ rifleOnStation }}</td>
                            <td>{{ rifleCount }}</td>
                        </tr>
                        <tr>
                            <td>Pistol</td>
                            <td>
                                {{
                                    pistolCount -
                                        (pistolOnDuty + pistolOnStation)
                                }}
                            </td>
                            <td>{{ pistolOnDuty }}</td>
                            <td>{{ pistolOnStation }}</td>
                            <td>{{ pistolCount }}</td>
                        </tr>
                        <tr>
                            <td>SMG</td>
                            <td>
                                {{ smgCount - (smgOnDuty + smgOnStation) }}
                            </td>
                            <td>{{ smgOnDuty }}</td>
                            <td>{{ smgOnStation }}</td>
                            <td>{{ smgCount }}</td>
                        </tr>
                        <tr>
                            <td>MG</td>
                            <td>
                                {{ mgCount - (mgOnDuty + mgOnStation) }}
                            </td>
                            <td>{{ mgOnDuty }}</td>
                            <td>{{ mgOnStation }}</td>
                            <td>{{ mgCount }}</td>
                        </tr>
                        <tr>
                            <td>LMG</td>
                            <td>
                                {{ lmgCount - (lmgOnDuty + lmgOnStation) }}
                            </td>
                            <td>{{ lmgOnDuty }}</td>
                            <td>{{ lmgOnStation }}</td>
                            <td>{{ lmgCount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(window.User.id);
        axios.get("/api/admin/user/" + window.User.id).then(res => {
            console.log(res);
            this.gunId = res.data;
        });
    },
    data() {
        return {
            fromDate: "",
            toDate: "",
            user: window.User,
            gunId: "",
            generate: false,
            rifleCount: 0,
            rifleOnStation: 0,
            rifleOnDuty: 0,
            smgCount: 0,
            smgOnStation: 0,
            smgOnDuty: 0,
            mgCount: 0,
            mgOnStation: 0,
            mgOnDuty: 0,
            pistolCount: 0,
            pistolOnStation: 0,
            pistolOnDuty: 0
        };
    },
    methods: {
        getData() {
            console.log(this.fromDate);
            console.log(this.toDate);
            if (this.fromDate == "" || this.toDate == "") return;
            axios
                .post("/api/admin/report", {
                    fromDate: this.fromDate,
                    toDate: this.toDate,
                    gun_id: this.gunId
                })
                .then(res => {
                    console.log(res);
                    this.rifleCount = res.data.rifleCount;
                    this.rifleOnDuty = res.data.rifleOnDuty;
                    this.rifleOnStation = res.data.rifleOnStation;

                    this.smgCount = res.data.smgCount;
                    this.smgOnDuty = res.data.smgOnDuty;
                    this.smgOnStation = res.data.smgOnStation;

                    this.lmgCount = res.data.lmgCount;
                    this.lmgOnDuty = res.data.lmgOnDuty;
                    this.lmgOnStation = res.data.lmgOnStation;

                    this.mgCount = res.data.mgCount;
                    this.mgOnDuty = res.data.mgOnDuty;
                    this.mgOnStation = res.data.mgOnStation;

                    this.pistolCount = res.data.pistolCount;
                    this.pistolOnDuty = res.data.pistolOnDuty;
                    this.pistolOnStation = res.data.pistolOnStation;

                    this.generate = true;
                });
        }
    }
};
</script>

<style></style>
