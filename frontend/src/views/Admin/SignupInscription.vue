<template>
  <div>
    <p> Enregistrement et validation d'incription  par la ref:{{ inscription.idAdmin}}
    </p>
    <form @submit="onPostData" method="post" name="inscription">
     
          <label class="labelForm">Nouveau message avec image optionnelle</label> <br> <br>
              <p v-if="errors.length">
               <b>Merci de corriger les erreurs suivantes : </b>
              <ul>
                  <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
              </p>
      <input
            id="idEtudiant"
            v-model="inscription.idEtudiant"
            type="text"
            name="idEtudiant"
            placeholder="idEtudiant"
        >
         <input
            id="email"
            v-model="inscription.email"
            type="text"
            name="email"
            placeholder="email"
        >
        <input
            id="idAdmin"
            v-model="inscription.idAdmin"
            type="text"
            name="idAdmin"
            placeholder="idAdmin"
        >
        <input
            id="content"
            v-model="inscription.content"
            type="text"
            name="content"
            placeholder="content"
        >
        <input
            id="refFormation"
            v-model="inscription.refFormation"
            type="text"
            name="refFormation"
            placeholder="refFormation"

        >
          <input
            id="dateExpire"
            v-model="inscription.dateExpire"
             type="text"
            name="dateExpire"
            placeholder="dateExpire"
        >
          <input
            id="activeInscription"
            v-model="inscription.activeInscription"
            type="text"
            name="activeInscription"
            placeholder="activeInscription"
        >
        <div class="right">
            <button
                type="submit"
                value="val"
                >Envoyer!
            </button>
        </div>
    </form>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios';
  import VueAxios from 'vue-axios'
  import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
  Vue.use(VueFilterDateFormat);
  Vue.use(VueAxios, axios);
  export default {
    name: 'SignupInscription',
    data() {
      return {
        myId:Number,
        errors: [],
        users: [],
        user: '',
        userRead: '',
        idAdmin: '',
        email: '',
        inscription: {
          email: '',
          refFormation: '',
          idAdmin: '',
          idEtudiant: '',
          content: '',
          activeInscription : 'false',
        },
        post: {
          email: '',
          refFormation: '',
          idAdmin: '',
          idEtudiant: '',
          content: '',
          activeInscription : 'false',
        },
      }
    },
    created() {
    },
     methods: {
    onPostData(e) {
      e.preventDefault();
        this.errors = [];
        if (!this.inscription.idEtudiant || !this.inscription.email ) {
          this.errors.push('Veillez saisir l\'identifiant ou le mail de l\'étudiant');
          }
         else if (this.inscription.idEtudiant.length >= 30 || this.inscription.idEtudiant.length <= 0){
          this.errors.push('Votre titre doit comprendre entre 4 et 30 caractères.');
        }
         if (!this.inscription.idAdmin) {
          this.errors.push('Veillez saisir l\'identifiant de l\'administrateur');
          }
         else if (this.inscription.idAdmin.length <= 0){
          this.errors.push('Votre identifiant administrateur doit comprendre entre 4 et 30 caractères.');
        }
        if (!this.inscription.content) {
          this.errors.push('Veillez saisir le contenu');
        } else if (this.inscription.content.length >= 550 || this.inscription.content.length <= 3){
          this.errors.push('Votre inscription doit contenir entre 4 et 550 caractères.');
        }
        if (!this.errors.length) {
          // console.log('Vérification des données concernant linscription OK')
          return this.postNew(this.inscription)
        }
    },
    postNew: function (inscription) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
        this.axios.post('https://212.227.142.69:3000/api/inscriptions/new/', inscription, {
            headers: {
              'Authorization': token
            }
          })
        .then((response) => {
            this.inscription = response.data
             return this.inscription;
        })
        .catch(function(err) {
                err.statusCode = 401;
          })
        
    }}}
</script>

<style>
</style>