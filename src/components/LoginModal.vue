<template>
    <div class="modal fade" id="signin-modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Login</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent class="form-horizontal" ref="loginForm">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="password" class="form-control" placeholder="Enter Your Email">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Enter Your Password">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="signin">Sign in</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  methods: {
    signin: function() {
        console.log("sign in");
    }
  }
}
</script>

<style lang="css" scoped>
</style>