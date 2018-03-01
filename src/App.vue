<template>
  <div id="app">
    <ws-logged v-if="logged" @ws-logged="setLogged" />

    <ws-auth-register v-if="!logged" />

    <ws-auth-login v-if="!logged" @ws-logged="setLogged" />
  </div>
</template>

<script>
import WsAuthRegister from './components/auth/register';
import WsAuthLogin from './components/auth/login';
import WsLogged from './components/logged';

export default {
  name: 'app',
  data () {
    return {
      logged: false
    }
  },

  created: function() {
    this.setLogged(!!this.$cookie.get('ws_jwt_token'));
  },

  components: {
    WsAuthRegister,
    WsAuthLogin,
    WsLogged
  },

  methods: {
    setLogged: function(logged) {
      this.logged = logged;
    }
  }
}
</script>
