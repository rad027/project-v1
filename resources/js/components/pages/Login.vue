<template>
    <div class="login-box">
        <div class="login-logo">
          <a href="/"><b>AGF </b>Security</a>
        </div>
        <!-- /.login-logo -->
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <div class="alert alert-danger rounded-0" v-if="has_error">
              Email or Password is incorrect. Please try again.
            </div>
            <form autocomplete="off" @submit.prevent="login" method="post">
              <div class="input-group mb-3">
                <input type="email" v-model="email" name="email" class="form-control" placeholder="Email">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="password" v-model="password" name="password" class="form-control" placeholder="Password">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  
                </div>
                <!-- /.col -->
                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
                <!-- /.col -->
              </div>
            </form>
          </div>
          <!-- /.login-card-body -->
        </div>
      </div>
      <!-- /.login-box -->  
</template>
<script>
  export default {
    data() {
      return {
        email: null,
        password: null,
        has_error: false
      }
    },
    created(){
      this.$parent.$parent.reloader_pane = false;
    },
    mounted() {
      if(this.$auth.check()){
        const redirectTo = this.$auth.user().role == 2 ? 'admin.dashboard' : 'dashboard'
        this.$router.push({name: redirectTo})
      }
      $('body').removeClass('hold-transition sidebar-mini').addClass('hold-transition login-page');
    },
    methods: {
      login() {
        // get the redirect object
        this.$parent.$parent.reloader_pane = true;
        var redirect = this.$auth.redirect()
        var app = this
        this.$auth.login({
          params: {
            email: app.email,
            password: app.password
          },
          success: function() {
            // handle redirection
            const redirectTo = this.$auth.user().role == 2 ? 'admin.dashboard' : 'dashboard'
            this.$router.push({name: redirectTo})
            //alert(redirectTo);
          },
          error: function() {
            app.has_error = true
            app.$parent.$parent.reloader_pane = false;
          },
          rememberMe: true,
          fetchUser: true
        })
      }
    }
  }
</script>