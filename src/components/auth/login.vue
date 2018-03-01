<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: '',
      },

      error: false
    }
  },

  methods: {
    singin: function() {
      this.$http.post('http://wosh-api.oo/api/auth/login', this.user).then(
        response => {
          this.$cookie.set('ws_jwt_token', response.body.access_token, 1);
          this.$emit('ws-logged', true);
        },
        response => {
          this.error = true;
        }
      );
    }
  }
}
</script>

<template>
  <div class="login-form">
    <fieldset>
      <legend>Login</legend>

      <form v-on:submit.prevent="singin">
        <span style="color: red;" v-if="error">Email ou Senha não encontrados.</span>

        <p>
          <label>
            Email <input type="email" name="email" v-model="user.email" />
          </label>
        </p>

        <p>
          <label>
            Senha <input type="password" name="password" v-model="user.password" />
          </label>
        </p>

        <button>Login</button>
      </form>
    </fieldset>
  </div>
</template>
