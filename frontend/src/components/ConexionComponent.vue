<template>
        <div class='group__header'>
          <div class="group__header__body__btn">{{  title }}</div>
            <form @submit="postData" method="post">
                <div class='group__header__body '>
                    <p v-if="errors.length">
                        <b>Merci de corriger les erreurs suivantes : </b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                    </p>
                    <p>
                        <label for="email">Email* </label>
                        <input
                              id="email"
                              v-model="user.email"
                              type="email"
                              name="email"
                        ><br> <br>
                    </p>
                    <p>
                        <label for="password">Mot de passe* </label>
                        <input
                              id="password"
                              v-model="user.password"
                              type="password"
                              name="password"
                        >
                    </p>
                    <button class=" group__header__body__btn">Connexion</button>
                </div>
            </form>
          <div>
              <a class="labelForm" href="/#/forgetPassword">Mot de passe oublié</a>
          </div>
        <div>
          <a class="labelForm" href="/signup/">Création de compte</a>

          </div>
        </div>
</template>

<script>
  import Vue from "vue";
  
  import VueAxios from "vue-axios";
  import axios from "axios";

  Vue.use(VueAxios, axios)
  export default {
    name: 'ConexionComponent',
    data() {
      return {
        errors: [],
        user: {
          email: null,
          password: null,
        }
      }
    },
    methods: {
      postData: function (e) {
        e.preventDefault();
        this.errors = [];
        if (!this.user.password) {
          this.errors.push('Veillez saisir un mot de passe');
        } else if (!this.validPassword(this.user.password)) {
          this.errors.push('Entre 8 et 30 caractères et au moins: 1 chiffre, 1 lettre minuscule, 1 lettre majuscule, 1 caractère spécial');
        }
        if (!this.user.email) {
          this.errors.push('Veillez saisir votre email');
        } else if (!this.validEmail(this.user.email)) {
          this.errors.push('L\'adresse email est invalide.');
        }
        if (!this.errors.length) {
          return this.post(this.user);
        }
      },
      post: function (user) {
         this.axios.post('https://212.227.142.69:3000/api/users/login/',user)
          .then(reponse => {
            this.user = reponse.data
        console.log('Je crée le local-storage ');
                    // stokage token dans localStorage
                    let objMySession = {
                      myId: this.user.userId,
                      myToken: this.user.token
                      }
        console.log(this.user);
                    let sessionStore = JSON.stringify(objMySession);
                    localStorage.setItem("obj",sessionStore);
                    this.$store.dispatch("nowLogged");
                    this.$router.push({path: '/accueil'});
                    setTimeout( () => this.$router.push({ path: '/logout'}), 60*60*1000);
        })
          .catch((error) => {
            console.log(error)
            this.errors.push('Impossible de vous logger en bdd');
            this.$router.push({path: '/'})
            })
      },
      validEmail: function (email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
      },
      validPassword: function (password) {
        const regex = /^(?=.{08,30}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)(?!.*\s).*$/;
        return regex.test(password);
      },
      }
  }


</script>
<style lang="scss">
    @import 'sass/main.scss';
</style>