<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },

      errors: {
        name: [],
        email: [],
        password: [],
      }
    }
  },

  methods: {
    signup: function() {
      this.$http.post('http://wosh-api.oo/api/auth/register', this.user).then(
        response => {
          this.reset();
        },
        response => {
          this.errors = response.body.errors;
        }
      );
    },

    reset: function() {
      this.user.name = '';
      this.user.email = '';
      this.user.password = '';

      this.errors.name = [];
      this.errors.email = [];
      this.errors.password = [];
    }
  }
}
</script>

<template>
  <div class="register-form">
    <fieldset>
      <legend>Sign Up</legend>

      <form v-on:submit.prevent="signup">
        <p>
          <label>
            Nome <input type="text" name="name" v-model="user.name" />
          </label>
          <span style="color: red;" v-if="errors.name != undefined">{{ errors.name[0] }}</span>
        </p>

        <p>
          <label>
            Email <input type="email" name="email" v-model="user.email" />
          </label>
          <span style="color: red;" v-if="errors.email != undefined">{{ errors.email[0] }}</span>
        </p>

        <p>
          <label>
            Senha <input type="password" name="password" v-model="user.password" />
          </label>
          <span style="color: red;" v-if="errors.password != undefined">{{ errors.password[0] }}</span>
        </p>

        <button>Registrar</button>
      </form>
    </fieldset>
  </div>
</template>
