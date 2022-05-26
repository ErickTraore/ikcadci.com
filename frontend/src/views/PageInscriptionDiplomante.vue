<template>
<div id="app">
  <!-- partie une -->
    <div class='thing'>
        <div  class='thing__header'>


  <!-- partie deux -->



 <form @submit="postData" method="post">

<!-- DEBUT_1 -->
                <div class="proj__card">
                    <div class="proj__card__firstTitle"  @click="isShowingSeshsw ^= true">Inscription:SESHSW</div>
                    <div class="proj__card__show"  v-show="isShowingSeshsw">
                          <div class="proj__card__show__frame">
       <!-- FORMATION_1 -->
                           <div class='thing__header__body'>
                          <label>Sélection formation SESHSW ou SESHSW-NSW</label>
                        <!-- PART_1 -->

                     <div class='thing__header__body__seba'>
                            <div class='thing__header__body__seba__box'> 
                                <input 
                                type="radio" 
                                id="seshsw-s0" 
                                value="sehsw-s0" 
                                v-model="posts.seshsw">
                                <label for="seshsw-s0">Aucun</label>
                            </div>
                     </div>
                        <!-- PART_2 -->
                     <div class='thing__header__body__seba'>
                            <div class='thing__header__body__seba__box'> 
                                <input 
                                type="radio" 
                                id="seshsw-s1" 
                                value="seshsw-s1" 
                                v-model="posts.seshsw">
                                <label for="seshsw-s1">seshsw-semestre-1</label>
                            </div>
                    </div>
                        <!-- PART_3 -->
                    <div class='thing__header__body__seba'>
                            <div class='thing__header__body__seba__box'><input 
                                type="radio" 
                                id="seshsw-s2" 
                                value="seshsw-s2" 
                                v-model="posts.seshsw">
                                <label for="seshsw-s2">seshsw-semestre-2</label>
                            </div>
                    </div>
                        <!-- PART_4 -->
                    <div class='thing__header__body__seba'>
                            <div class='thing__header__body__seba__box'><input 
                                type="radio" 
                                id="seshsw-s3" 
                                value="seshsw-s3" 
                                v-model="posts.seshsw">
                                <label for="seshsw-s3">seshsw-semestre-3</label>  
                            </div>
                    </div>
                        <!-- PART_5 -->
                    <div class='thing__header__body__seba'>
                            <div class='thing__header__body__seba__box'>
                               <input 
                                type="radio" 
                                id="seshsw-s4" 
                                value="seshsw-s4" 
                                v-model="posts.seshsw">
                                <label for="seshsw-s4">seshsw-semestre-4</label>
                            </div>
                    </div>
                        <!-- suite -->
                    
                    <div class='thing__header__body__seba'>
                            <div class='thing__header__body__seba__box'>
                               <input 
                                type="radio" 
                                id="seshsw-s5" 
                                value="seshsw-nsw-s1" 
                                v-model="posts.seshsw">
                                <label for="seshsw-s5">seshsw-nsw-semestre-1</label>
                            </div>
                    </div>
                 
                    <div class='thing__header__body__seba'>
                      <div class='thing__header__body__seba__box'>
                          <input 
                          type="radio" 
                          id="seshsw-s6" 
                          value="seshsw-nsw-s2" 
                          v-model="posts.seshsw">
                          <label for="seshsw-s6">seshsw-nsw-semestre-2</label>
                      </div>
                    </div>
                    
                    <div class='thing__header__body__seba'>
                      <div class='thing__header__body__seba__box'>
                            <input 
                          type="radio" 
                          id="seshsw-s7" 
                          value="seshsw-nsw-s3" 
                          v-model="posts.seshsw">
                          <label for="seshsw-s7">seshsw-nsw-semestre-3</label>  
                      </div>
                    </div>

                    <div class='thing__header__body__seba'>
                      <div class='thing__header__body__seba__box'>
                          <input 
                          type="radio" 
                          id="seshsw-s8" 
                          value="seshsw-nsw-s4" 
                          v-model="posts.seshsw">
                          <label for="seshsw-s8">seshsw-nsw-semestre-4</label>
                      </div>
                    </div>

                            <button type="submit">Validation inscription</button>
                </div>
              </div>
            </div>
          </div>
          </form>
            <div class='thing__header__body'>
            <div class='thing__header__body'>
                <div>INSTITUT KEMETMAAT-CHEIKH ANTA DIOP 
                ASSOCIATION KEMETMAAT </div>
               <div class='thing__header__body--bis'> Abidjan-  quartier Riviera - Rond - point ADO
                Face Inspection Générale  du Ministère de l’Environnement
                kemetmaatabidjan@gmail.com
                Whatsaap kemetmaat : 225 0758662960 
                </div>
            </div>
            <div class='thing__header__body__title'>
            <p> Formulaire d'inscription.</p>
            </div>
            </div>
            <div class='thing__header__content'>
            <div class='thing__header__body__attention'> La campagne d’inscription aux enseignements en ligne de la deuxième session  de l’année 2022 se déroulera du 1er avril au 30 juin. Les cours débutent le vendredi 1er juillet 2022 avec un réunion de présentation en live. Les places étant limitées, il est conseillé de nous retourner le bulletin le plus tôt possible. Pour des informations détaillées ; demandez la « note de présentation du seshw et seshw-nsw de kamitologie » et « le catalogue-descriptif des formations » à l’adresse mail: kemetmaatabidjan@gmail.com </div> 
            </div>
            <div>1 - Situation à l’ Etat Civil</div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>Nom<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'>{{ profile.username }}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>Prenom<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'> {{ profile.lastname }}</div>
            </div>

          <!-- <div>Biographie: {{ profile.biographie}}</div> -->

            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>Date Naissance<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.dateBirthday}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>Ville Naissance<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.townBirthday}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>sexe<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.sexe}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>nationalite<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.nationalite}}</div>
            </div>
            <div>2 – Identité culturelle africaine</div>
                        <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>Nom Tradition:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.usernameTradition}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>Prenom Tradition:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.lastnameTradition}}</div>
            </div>
            <div>3 – Adresse</div>
             <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>Email<sup>*</sup>: </div>
                <div class='thing__header__body__content__saveTwo'> {{ profile.email }}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>adresseResid<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'> {{ profile.adresseResid}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>villeResid:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.villeResid}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>paysResid:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.paysResid}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>tel1:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.tel1}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>tel2<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.tel2}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>tel3:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.tel3}}</div>
            </div>
            <div>4 –Situation professionnelle </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>profession<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.profession}}</div>
            </div>
            <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>activite:</div>
                <div class='thing__header__body__content__saveTwo'>  {{ profile.activite}}</div>
            </div>
        <div>Vous avez choisi la formation: {{ profile.seshsw}}</div>
  <!-- FIN partie une -->
          </div>
  </div>
</div>
<!-- FIN_1 -->
</template>

<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
        isShowingFinale: false,
        isShowingSeshsw : false,
        isShowingSeshswNsw : false,
        isShowingSeba : false,

        visible: true,
        myStr:'',
        message: "Je suis un yankee",
        checkedFormations:[],
        profile: '',
        posts: {
          username: '',
          email: '',
          biographie: '',
          lastname: '',
          usernameTradition: '',
          lastnameTradition: '',
          dateBirthday: '',
          townBirthday: '',
          sexe: '',
          nationalite: '',
          adresseResid: '',
          villeResid: '',
          paysResid: '',
          tel1: '',
          tel2: '',
          tel3: '',
          picked: '',
          seshsw: '',
          seshswNsh: '',
          seba: '',
          profession: '',
          activite: ''
          }
      }
    },
     mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      console.log('collapseId:', collapseId)
      console.log('isJustShown:', isJustShown)
    })
    },
    created() {
      let objMySession = localStorage.getItem("obj")
      let myStorageToken = JSON.parse(objMySession)
      let token = myStorageToken.myToken;
      axios
        .get('https://212.227.142.69:3000/api/users/me/', {
          headers: {
            'Authorization': token
          }
        })
        .then(response => {
          this.profile = response.data
          this.testUser = this.profile.testUser
          console.log(this.testUser) // this.$store.dispatch("beforeLogged")
      if(this.testUser == 'testOk'){
       this.$store.dispatch("beforeLogged")
      }
        })
        .catch(error => console.log(error()))
    },
    methods: {
      myFunction: function () {	
        this.posts.seba = JSON.stringify(this.checkedFormations)
        },
      postData(e) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;

        this.axios.put('https://212.227.142.69:3000/api/users/me/', this.posts, {
          headers: {
            'Authorization': token
          }
        })
          .then(response => {
            this.profile.biographie= response.data.biographie
            this.profile.lastname= response.data.lastname
            this.profile.usernameTradition= response.data.usernameTradition
            this.profile.lastnameTradition= response.data.lastnameTradition
            this.profile.dateBirthday= response.data.dateBirthday
            this.profile.townBirthday= response.data.townBirthday
            this.profile.sexe= response.data.sexe
            this.profile.nationalite= response.data.nationalite
            this.profile.adresseResid= response.data.adresseResid
            this.profile.villeResid= response.data.villeResid
            this.profile.paysResid= response.data.paysResid
            this.profile.tel1= response.data.tel1
            this.profile.tel2= response.data.tel2
            this.profile.tel3= response.data.tel3
            this.profile.picked= response.data.picked
            this.profile.seshsw= response.data.seshsw
            this.profile.seshswNsw= response.data.seshswNsw
            this.profile.seba= response.data.seba
            this.profile.profession= response.data.profession
            this.profile.activite= response.data.activite
          })
          .catch(error => console.log(error()))

        e.preventDefault();
      }, 
      delProfil() {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;

        this.axios.post('https://212.227.142.69:3000/api/users/delProfil', null, {
          headers: {
            'Authorization': token
          }
        })
          .then(response => {
            this.profile = response.data
          })
          .catch(error => console.log(error()))

      }
    }
  }
</script>

<style lang="scss" scoped>

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>
