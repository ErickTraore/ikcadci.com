<template>
    <div class='group__header'>
     <div>INSCRIPTION</div>
        <form @submit="postData" method="post">
            <div class='group__header__body'>
                <p v-if="errors.length">
                    <b>Merci de corriger les erreurs suivantes : </b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
                </p>
                <p v-if="byPass">
                    <ul>Email déjà utilisé</ul>
                  </p>
                <p>
                    <label for="username">Pseudo* </label>
                    <input
                            id="username"
                            v-model="user.username"
                            type="text"
                            name="username"
                    >
                </p>
                <p>
                  
                    <label for="email">Email* </label>
                    <input
                            id="email"
                            v-model="user.email"
                            type="email"
                            name="email"
                    >
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
             
                <button class="btn"> S'inscrire</button>
            </div>
        </form>
         <div>Vous avez déja un compte:</div>
     <div>
        <a href="/">Connectez-vous içi</a>
        </div>
     </div>
</template>
<script>
  import Vue from "vue";
  import VueAxios from "vue-axios";
  import axios from "axios";
  import { mapState } from 'vuex'

  Vue.use(VueAxios, axios)
  export default {
    name: 'SignupComponent',
    data() {
      return {
        pass: false,
        byPass: this.pass,
        testEmail: '',
        errors: [],
        user: {
          username: null,
          biographie: null,
          email: null,
          password: null,
        }
      }
    },
  components: {
  },
   computed: {
        ...mapState(['pass']),

  },
   methods: {
      postData: function (e) {

        e.preventDefault();
        this.errors = [];

        if (!this.user.password) {
          this.errors.push('Veillez saisir un mot de passe');
          }
        if (!this.validPasswordGle(this.user.password)) {
          this.errors.push('Mot de passe est invalide');
        }
         if (!this.validPasswordTotal(this.user.password)) {
          this.errors.push('Saisir entre 8 et 30 caractères');
        }
        if (!this.validPasswordMinuscule(this.user.password)) {
          this.errors.push('Saisir au moins une minuscule');
        }
        if (!this.validPasswordMajuscule(this.user.password)) {
          this.errors.push('Saisir au moins une majuscule');
        }
        if (!this.validPasswordChiffre(this.user.password)) {
          this.errors.push('Saisir au moins un chiffre');
        }
        if (!this.validPasswordSpecial(this.user.password)) {
          this.errors.push('Saisir au moins un caractère spécial');
        }
        if (!this.validPasswordVide(this.user.password)) {
          this.errors.push('Saisir aucun espace vide');
        }
        if (!this.user.username || this.user.username.length >= 21 || this.user.username.length <= 3) {
          this.errors.push('Votre pseudo doit contenir entre 4 et 30 caractères');
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
        this.axios.post('https://212.227.142.69:3000/api/users/testMail/', user)
          .then(response => {
            this.testmail = true
            this.data = response.data
            this.testmail = this.data.testmail
              if(!this.testmail){
                  this.$store.dispatch("afterPass");
                  }else{
                        this.$store.dispatch("beforePass");
                        this.axios.post('https://212.227.142.69:3000/api/users/register/', user)
                        .then(response => {
                          this.data = response.data
                          this.$router.push({path: '/accueil'})
                          })
                        .catch((error) => {
                          console.log(error)
                          })
                  }
            })
          .catch((error) => {
            console.log(error)
            // demarrer le serveur obligatoirement avant cette ligne
            // this.errors.push('L\'adresse email existe déjà.');
            // this.$router.push({path: '/signup'})
            })
      },

      validEmail: function (email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);

      },
      validPasswordGle: function (password) {
        const regex = /^(?=.{08,30}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)(?!.*\s).*$/;
        return regex.test(password);
      },
      validPasswordTotal: function (password) {
        const regex = /^(?=.{08,30}$).*$/;
        return regex.test(password);
      },
       validPasswordMinuscule: function (password) {
        const regex = /^(?=.*[a-z]).*$/;
        return regex.test(password);
      },
       validPasswordMajuscule: function (password) {
        const regex = /^(?=.*[A-Z]).*$/;
        return regex.test(password);
      },
       validPasswordChiffre: function (password) {
        const regex = /^(?=.*[0-9]).*$/;
        return regex.test(password);
      },
       validPasswordSpecial: function (password) {
        const regex = /^(?=.*\W).*$/;
        return regex.test(password);
      },
       validPasswordVide: function (password) {
        const regex = /^(?!.*\s).*$/;
        return regex.test(password);
      }
    }
  }


</script>
<style scoped>
    * {
        box-sizing: border-box;
    }
    .group__header {
        font-size: 1.2rem;
        align-items: center;
        background-color: rgba(10, 10, 10, 0.288);
        padding: 1rem;
        border-radius: 2rem;
        color: white;
    }
    .group__header__body {
        padding: 1rem;
        background-color: rgba(14, 14, 15, 0.205);
        border-radius: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>