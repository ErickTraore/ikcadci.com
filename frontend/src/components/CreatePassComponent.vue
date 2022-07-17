<template>
    <div class='group__header'>
     <div>INSCRIPTION</div>
        <form @submit="postData" method="post">
            <h3>Mot de pass oublié</h3>
            <h2>Créer votre nouveau mot de passe </h2>
            <div class='group__header__body'>
                <div>{{ user.email }}</div>
                <p v-if="errors.length">
                    <b>Merci de corriger les erreurs suivantes : </b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
                </p>

              
                <p>
                    <label for="numberPass">N°confidentiel reçu* </label>
                    <input
                            id="numberPass"
                            v-model="user.numberPass"
                            type="text"
                            name="numberPass"
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

                <button class="btn"> Créer nouveau mdp </button>
            </div>
        </form>
         <div>Vous avez déja un compte:</div>
     <div>
        {{ pass }}
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
      
        if (!this.errors.length) {
          return this.post(this.user);
        }
      },

      post: function (user) {
      this.axios.post('https://212.227.142.69:3000/api/users/' + this.user.id +'/changePass/', user)
                    .then(response => {
                            this.user = response.data
                            })
                    .catch(error => console.log(error()))
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