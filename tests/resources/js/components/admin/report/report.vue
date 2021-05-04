<template>
    <div>
        <component v-bind:is="'navbar'"></component>
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="w-75">
                    <div class="d-flex justify-content-center">
                        <img class="w-25 h-25" alt="logo" />
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
                                <label for="kote_nco" class="font-weight-bold"
                                    >Kote NCO</label
                                >
                                NCO NAME / ID
                            </div>
                            <div class="mb-4 d-flex flex-column">
                                <label for="opening_kote"
                                    >Time of Opening Kote</label
                                >
                                <input
                                    type="date"
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
                                    name="closing_kote"
                                    id="closing_kote"
                                />
                            </div>
                            <div class="d-flex justify-content-center">
                                <router-link
                                    to="/admin/reportGen"
                                    class="btn btn-primary"
                                    >Go Report</router-link
                                >
                            </div>
                        </form>
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
