<template>
    <div>
        <div class="pageconforme__titre">
            <h2>Votre inscription du:</h2>
            </div>
        <div class="pageconforme__content">
            <div class="pageconforme__content__identite">
                    <div class="pageconforme__content__identite__div">Kemetmaat, le: </div><br><br>
                    <div class="pageconforme__content__identite__div">Prenom Traore</div>
                    <div class="pageconforme__content__identite__div">N°Dossier Traore</div>
                    <div class="pageconforme__content__paiement__div3">Votre formation: Traore Traore</div>
                    <div class="pageconforme__content__paiement__div3">Tarif formation: Traore</div>
                    <div class="pageconforme__content__paiement__div3">Delai de paiement: 72h</div>
            </div>
            <div>




            <select  onchange="document.getElementById('text').value=this.value">
            <option value="uinscription validée sous réserve de votre paiement dans un délai de 72heures. detailed information and change your preferences before consenting or to 
                                    refuse consenting.Please note that some processing of your personal data may not 
                                    require your consent, but ">Objet: Dossier accepté en attente de paiement</option>
            <option value="dossier incomplet. Pièces manquante. 72 de délai de retour.enting.Please note that some processing of your personal data may not 
                                    require your consent, but ">Objet: Dossier incomplet. Pièces manquantes.</option>
            <option value="Dossier refusé pour non respect des conditions académiques  requises, detailed information and change your preferences before consenting or to 
                                    refuse consenting.Please note that some processing of your personal data may not 
                                    require your consent, but ">Objet: Dossier refusé</option>
            </select>

            <textarea class="pageconforme__content__textarea" id="text"></textarea>
            </div>
            </div>
                 <div>
                                      <button 
                                          id="button"
                                          v-on:click="goMailer(id)">
                                          Envoi email
                                      </button>
                                  </div> 

    </div>
</template>
<script>
 import Vue from "vue";
  
  import VueAxios from "vue-axios";
  import axios from "axios";

  Vue.use(VueAxios, axios)
export default{
    name: "PageConformComponent",
    data() {
        return {
            student: '',
                 id: '',


        }
    },
     created(id) {
      let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
      axios
        .get('https://212.227.142.69:3000/api/students/' + id + '/seen', {
          headers: {
            'Authorization': token
          }})
        .then(response => {
          this.student = response.data
        })
        .catch(error => console.log(error()))
    },
    methods: {
          goMailer: function (id) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
         axios
        .get('https://212.227.142.69:3000/api/students/' + id + '/seen', {
          headers: {
            'Authorization': token
          }})
        .then(response => {
          this.student = response.data
          this.templateView = false
        })
                axios.post('https://212.227.142.69:3000/api/student/' + id +'/goMailer', null, {
                  headers: {
                    'Authorization': token
                  }
                })
                  .then(response => {
                    this.dataMailer = response.data
                  })
                  .catch(error => console.log(error()))
        .catch(error => console.log(error()))

      },
    }
}
</script>
