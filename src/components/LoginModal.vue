<template>
    <div class="modal fade" ref="loginModal">
        <!-- <div class="backdrop"></div> -->
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Login</h4>
                    <button type="button" class="close" aria-label="Close" @click="closeModal()" :disabled="isLoading">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert" v-show="errorMessage !== ''" v-text="errorMessage"></div>
                    <form @submit.prevent class="form-horizontal" ref="loginForm">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" placeholder="Enter Your Email" :disabled="isLoading" v-model="email">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Enter Your Password" :disabled="isLoading" v-model="password">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="signin" :disabled="isLoading">
                        <span v-if="isLoading">Please Wait...</span>
                        <span v-else>Sign in</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- inside of AppHeader component -->
    <teleport to=".navbar-nav">
        <li class="nav-item" v-if="!isAuthenticated">
            <a href class="nav-link" @click.prevent="openModal()">Login</a>
        </li>
        <li class="nav-item" v-else>
            <a href class="nav-link" @click.prevent="signout()">Logout</a>
        </li>
    </teleport>
</template>

<script>
import firebase from "../utilities/firebase/firebase";
import firebase_const from "../utilities/firebase/constant";
import jQ from "jquery";

export default {
    mounted: function() {
        firebase.auth().onAuthStateChanged((user) => {
          this.isAuthenticated = user !== null;
        });
    },

    data() {
        return {
            email: "rodrigogalura3rd@gmail.com",
            password: "secret123",
            isLoading: false,
            errorMessage: "",
            isAuthenticated: false
        }
    },

    methods: {
        openModal: function() {
            jQ(this.$refs.loginModal).modal("show")
        },

        closeModal: function() {
            jQ(this.$refs.loginModal).modal("hide")
        },

        signin: function() {
            this.isLoading = true;

            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.isLoading = false;
                    this.email = "";
                    this.password = "";
                    this.isAuthenticated = true;

                    this.closeModal();
                })
                .catch((e) => {
                    this.isLoading = false;

                    if (e.code === firebase_const.AUTH_NETWORK_REQUEST_FAILED_CODE) {
                        this.errorMessage = "A network error. Please check your internet connection.";
                    } else {
                        this.email = "";
                        this.password = "";
                        this.errorMessage = "Invalid Email and Password!";
                    }
                });
        },

        signout: function() {
            firebase.auth().signOut().then(() => {
              console.log("signout success")
            }).catch((err) => {
                console.log("signout error")
                console.log(err);
            });
        }
    }
}
</script>
<style>
.backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.5;
}
</style>