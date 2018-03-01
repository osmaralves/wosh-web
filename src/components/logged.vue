<script>
export default {
  data () {
    return {
    }
  },

  methods: {
    doLogout: function() {
      var wsJwtToken = this.$cookie.get('ws_jwt_token'),
          headers = { 'Authorization': 'Bearer '+wsJwtToken };

      this.$http.get('http://wosh-api.oo/api/auth/logout', { headers }).then(
        response => {
          this.$cookie.delete('ws_jwt_token');
          this.$emit('ws-logged', false);
        }
      );
    }
  }
}
</script>

<template>
  <div class="logged">
    <h1>Bem Vindo!</h1>

    <button v-on:click.prevent="doLogout">Logout</button>
  </div>
</template>
