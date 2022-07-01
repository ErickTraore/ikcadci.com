<template>
    <div id="app">
      <div id="container" class="projPrev"> 
              <div class="projPrev__groupo rotateLogo">
                  <img  alt="Logo-groupomania" src="./assets/plus/masque_kemet.png" class="projPrev__groupo__masq"> 
                  <div class="projPrev__groupo__pic">
                  Institut Kemetmaat
                  </div>
              </div>
      </div>
    <nav class="navbar navbar-expand-sm navbar-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Messagerie</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page-profil">Profil</router-link>  
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/home-formation">Formations</router-link>  
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/stepper">Inscription</router-link>  
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/maClass">Classe</router-link>  
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if=logged to="/">  <span class="fa fa-user "></span> Connexion</router-link>  
              <router-link class="nav-link" v-else  to="/logout">Déconnexion</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if= testBool  to="/pageAdmin">Page administrateur</router-link> 
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="text" placeholder="Search">
            <button class="btn btn-primary" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>
      <router-view/>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['logged']),
     testBool(){
      return this.item.isAdmin
    }
    // ...mapGetters(['nowLogged'])
  },
    data() {
    return {
      item:''
    };
  },
   created() {
     let objMySession = localStorage.getItem("obj")
     if(objMySession){
          let myStorageToken = JSON.parse(objMySession)
          let token = myStorageToken.myToken;
          axios
          .get('https://212.227.142.69:3000/api/users/me/',{
                  headers: {
                    'Authorization': token
                  }
                })
              .then(response => {
                this.item = response.data
                })
              .catch(error => console.log(error()))

        }
  },
  props: {},
  methods: {
  },
};
</script>
<style lang="scss">
    @import './sass/main.scss';
navbar-toggler-icon{
  color:black;
}
</style>


