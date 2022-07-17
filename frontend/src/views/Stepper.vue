<template>
    <div id="app">
        <center>
              <div class="inscription">Je m'inscrits à une formation chez Kemetmaat! </div>
                <h2 class="page"> {{ page }}</h2>
              <ul class="stepper">
                <a href="#"   class="stepper__item"  v-on:click="page =1" :class="{'stepper__item current': page === 1}"><li>1-Identification </li></a>
                <a href="#"   class="stepper__item"  v-on:click="page =2" :class="{'stepper__item current': page === 2}"><li>2-Choisir ma formation</li></a>
                <a href="#"   class="stepper__item"  v-on:click="page =3" :class="{'stepper__item current': page === 3}"><li>3-Pièces-jointes</li></a>
                <a href="#"   class="stepper__item"  v-on:click="page =4" :class="{'stepper__item current': page === 4}"><li>4-Engagements</li></a>
                <a href="#"   class="stepper__item"  v-on:click="page =5" :class="{'stepper__item current': page === 5}"><li>5-Envoyez</li></a>
                </ul>
                <div id="content" style="width: 100%;">

                    <div v-if="page==1" id="sec_one">
                      <div class="stepper2">
                          <InfoComponent/>
                      </div>
                    </div>
                    <div v-if="page==2" id="sec_two">
                     <div class="stepper2">
                          <SignupInscriptionComponent/>
                      </div>
                    </div>
                    <div v-if="page==3" id="sec_three">
                       <div class="stepper2">
                          <PieceComponent/>
                      </div>
                    </div>
                     <div v-if="page==4" id="sec_four">
                       <div class="stepper2">
                          <EngagementComponent/>
                      </div>
                    </div>
                    <div v-if="page==5" id="sec_five">
                        <div class="stepper2">
                          <FormulaireComponent/>
                        </div>
                    </div>
                </div>
                <div v-if="page <= 4 ">
                    <div id="b">
                      <div id="b_left">
                          <button  class="btn-left" type="submit" v-on:click="page <= 5 && page > 1  ? page -=1 :  ''" >Retour </button>
                      </div>
                      <div id="b_right">
                          <button  class="btn-right" type="submit" v-on:click="page >= 1 && page < 5  ? page +=1 :  ''" >Avance</button>
                      </div>
                    </div>
                </div>
                 <div v-else>
                    <div id="b">
                      <div id="b_left">
                          <button  class="btn-left" type="submit" v-on:click="page <= 5 && page > 1  ? page -=1 :  ''" >Retour </button>
                      </div>
                      <div id="b_right">
                          <button  class="btn-right" >Fin</button>
                      </div>
                    </div>
                </div>
        </center>
    </div>
</template>
<script>
  import SignupInscriptionComponent from '@/components/SignupInscriptionComponent.vue'
  import FormulaireComponent from '@/components/FormulaireComponent.vue'
  import EngagementComponent from '@/components/EngagementComponent.vue'
  import InfoComponent from '@/components/InfoComponent.vue'
  import PieceComponent from '@/components/PieceComponent.vue'
  import Vue from "vue";
  import VueAxios from "vue-axios";
  import axios from "axios";

  Vue.use(VueAxios, axios)

export default {
    name: 'Stepper',
     components: {
    PieceComponent,
    InfoComponent,
    EngagementComponent,
    FormulaireComponent,
    SignupInscriptionComponent
    },
    data() {
        return{
            page: 1,
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
          seba: ''
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
        goback: function () {	
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
