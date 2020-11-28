<template>
    <AppHeader />

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
    components: { AppHeader }
};
</script>