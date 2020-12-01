<template>
    <AppHeader />

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <router-view></router-view>
                <LoginModal />
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";

export default {
    components: { AppHeader, LoginModal }
};
</script>

<style>
    .login-modal-enter-active,
    .login-modal-leave-active {
      transition: opacity 0.5s ease;
    }

    .login-modal-enter-from,
    .login-modal-leave-to {
      opacity: 0;
    }
</style>