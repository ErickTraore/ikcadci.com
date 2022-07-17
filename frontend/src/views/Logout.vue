<template>
  <div class="Logout">
      <h2> Vous serez déconecté dans 10 secondes ? </h2>
      <div>Merci de votre visite
            <button @click="logoutClick"> Se Déconnecter maintenant!</button> 
      </div> <br> 
   </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default {
  created(){
      setTimeout( () =>{
        this.$store.dispatch('beforeLogged'),
        window.localStorage.clear(),
        this.$router.push({ path: '/'})}
      , 10000);

    },
   methods: {
      logoutClick () {
        this.$store.dispatch('beforeLogged')
         window.localStorage.clear()
          this.$router.push('/')
        },
      continuerClick: function () {
          this.$router.push('/')
        }
}
}

</script>