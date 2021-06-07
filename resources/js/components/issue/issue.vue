<template>
    <div
        style="background-image:url('images/demo/backgrounds/rfid.jpg'); height:50rem; background-repeat:no-repeat;background-size:cover;background-position:center center;background-attachment:fixed;"
    >
        <component v-bind:is="'navbar'"></component>
        <div v-if="showInputForm" class="container text-center mt-5">
            <div>
                <img
                    src="profile_img/avatar2.png"
                    alt="DP"
                    class="profile-img"
                />
            </div>
            <h3 class="mt-2">Name: {{ userName }}</h3>
            <h4>Soldier no: {{ soldier_no }}</h4>
            <h4>Email: {{ userEmail }}</h4>
        </div>
        <div class="container">
            <div v-if="showInputForm" class="m-5">
                <!--<div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label"
            >Type of gun</label
          >
          <select
            class="form-select form-select-lg w-75 p-2"
            id="autoSizingSelect"
            v-model="gunType"
          >
            <option selected value="-1">Choose Gun Type...</option>
            <option value="1">BD-08</option>
            <option value="2">LMG</option>
            <option value="3">SMG</option>
            <option value="4">Pistol</option>
            <option value="5">G3</option>
          </select>
        </div>-->
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                        >Body no of gun</label
                    >
                    <div class="w-75 p-2">
                        {{ gunType }}
                    </div>
                </div>
                <div v-if="!isIssued" class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label"
                        >Select Purpose</label
                    >
                    <select
                        class="form-select form-select-lg w-75 p-2"
                        id="autoSizingSelect"
                        v-model="purpose"
                    >
                        <option selected value="-1">Choose Purpose...</option>
                        <option value="firing">Firing</option>
                        <option value="maintainance">Maintainance</option>
                        <option value="training">Training</option>
                        <option value="duty">Duty</option>
                    </select>
                </div>
                <div v-if="!isIssued" class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label"
                        >Select Duty</label
                    >
                    <select
                        class="form-select form-select-lg w-75 p-2"
                        id="autoSizingSelect"
                        v-model="duty"
                    >
                        <option selected value="-1">Choose Duty Type...</option>
                        <option value="on duty">On Duty</option>
                        <option value="on station">On Station</option>
                    </select>
                </div>
                <button
                    v-if="!isIssued"
                    class="btn btn-primary"
                    @click="unlockGun"
                >
                    Unlock
                </button>
                <button v-else class="btn btn-primary" @click="lockGun">
                    Lock
                </button>
            </div>
            <div
                v-else
                class="m-5 text-center"
                style="margin-top: 9rem !important;"
            >
                <h3
                    style="font-size: xx-large;font-weight: bolder;color: #000000 !important;"
                >
                    Insert RFID
                </h3>
                <label for="rfid">RFID</label>
                <input type="text" id="rfid" v-model="rfid" autofocus />
                <label class="text-white" for="rfid_token">RFID Token</label>
                <input
                    type="text"
                    id="rfid_token"
                    v-model="rfid_token"
                    autofocus
                />
                <div class="mt-3">
                    <button class="btn btn-primary" @click="sendToken">
                        Gen Token
                    </button>
                </div>
                <div class="mt-3">
                    <button class="btn btn-primary" @click="checkIssued">
                        Issue/Deposit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
    data() {
        return {
            userName: "",
            soldier_no: "",
            userEmail: "",

            rfid: "",
            rfid_token: "",
            rfid_secret: "",
            gunType: "-1",
            purpose: "-1",
            duty: "-1",

            ledColor: null,

            isIssued: false,
            showInputForm: false
        };
    },
    methods: {
        unlockGun() {
            let formData = new FormData();
            formData.set("gun_id", this.gunType);
            formData.set("purpose", this.purpose);
            formData.set("duty", this.duty);
            formData.set("rfid", this.rfid);
            let url = "/api/admin/issue";
            axios
                .post(url, formData)
                .then(res => {
                    console.log(res);
                    alert("Issued!");

                    if (this.purpose == "firing") this.ledColor = "11";
                    else if (this.purpose == "maintainance")
                        this.ledColor = "12";
                    else this.ledColor = "13";

                    url =
                        "http://192.168.0.125:5000/gun-lock?gun_no=1&light_no=" +
                        this.ledColor;
                    axios
                        .get(url)
                        .then(res => {
                            window.location.href = "/home";
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                })
                .catch(err => {
                    console.log(err);
                });
        },
        sendToken() {
            if (this.rfid.length == 0) return;
            let url = "/api/admin/rfid/" + this.rfid;
            axios.get(url).then(res => {
                console.log(res);
                try {
                    let secret = Math.floor(Math.random() * 899999 + 100000);
                    this.rfid_secret = secret;
                    emailjs
                        .send(
                            "service_gs2qd6c",
                            "template_qzet7so",
                            // "service_war4haq",
                            // "template_0p0pf1r",
                            {
                                to_name: res.data.name,
                                from_name: "AMS ADMIN",
                                message: secret,
                                to_email: res.data.email
                            },
                            "user_rLVOvpWirLrlTJXc5lqMn"
                            // "user_rfwbsMUjACKZTfdsNkBRP"
                        )
                        .then(result => {
                            console.log(result);
                            window.alert(
                                `rfid token sned to ${res.data.email}`
                            );
                        });
                } catch (error) {
                    console.log({ error });
                }
            });
            return;
        },
        checkIssued() {
            if (this.rfid.length == 0) return;
            console.log(this.rfid_secret, this.rfid, this.rfid_token);
            if (this.rfid_token == this.rfid_secret) {
                let url = "/api/admin/rfid/" + this.rfid;
                axios
                    .get(url)
                    .then(res => {
                        console.log(res);
                        this.gunType = res.data.body_number;
                        this.isIssued = res.data.issued;
                        this.userName = res.data.name;
                        this.soldier_no = res.data.soldier_id;
                        this.userEmail = res.data.email;

                        this.showInputForm = true;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                window.alert("rfid token not matched");
            }
        },
        lockGun() {
            let formData = new FormData();
            formData.set("rfid", this.rfid);
            let url = "/api/admin/deposite";
            axios
                .post(url, formData)
                .then(res => {
                    console.log(res);
                    alert("Locked!");

                    url =
                        "http://192.168.0.125:5000/gun-lock?gun_no=0&light_no=00";
                    axios
                        .get(url)
                        .then(res => {
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style scoped>
.profile-img {
    max-width: 120px;
    border-radius: 50%;
}
</style>
