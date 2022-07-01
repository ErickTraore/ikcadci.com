<template>
    <div class='thing'>
        <div id="app" class='thing__header'>
             <form @submit="postData" method="post">
                 <div class="proj__card__show__frame">
                          <div class='thing__header__body'>
                                                <div class='thing__header__body__seba'>
                                                      <div class='thing__header__body__seba__box'>
                                                            <input 
                                                              type="checkbox" 
                                                              id="KMT-0000" 
                                                              value="KMT-0000" 
                                                              v-model="checkedFormations"
                                                            >
                                                              <label for="KMT-0000">Aucun</label>
                                                        </div>
                                                  </div>
                                                  <div class='thing__header__body__seba'>
                                                            <p>Seba : Théorie et methodologie  de l’afrocentricité. </p>
                                                      <div class='thing__header__body__seba__box'>
                                                              <input
                                                              type="checkbox" 
                                                              id="KMT-7007" 
                                                              value="KMT-7007" 
                                                              v-model="checkedFormations">
                                                              <label for="KMT-7007">KMT-7007</label>
                                                      </div>
                                                  </div>
                                                  <div class='thing__header__body__seba'>
                                                            <p>Seba : Historiographie diopienne.</p>
                                                      <div class='thing__header__body__seba__box'>
                                                            <input 
                                                              type="checkbox" 
                                                              id="KMT-7017" 
                                                              value="KMT-7017" 
                                                              v-model="checkedFormations"
                                                            >
                                                              <label for="KMT-7017">KMT-7017</label>
                                                        </div>
                                                  </div>
                                                  <div class='thing__header__body__seba'>
                                                              <p>Seba : Initiation mdw ntr grammaire 1. </p>
                                                      <div class='thing__header__body__seba__box'>
                                                            <input 
                                                              type="checkbox" 
                                                              id="KMT-7027" 
                                                              value="KMT-7027" 
                                                              v-model="checkedFormations"
                                                            >
                                                            <label for="KMT-7027">KMT-7027</label>
                                                      </div>
                                                  </div>
                                                  <div class='thing__header__body__seba'>
                                                            <p>Seba : Les grands mouvements de la pensée africaine.</p> 
                                                      <div class='thing__header__body__seba__box'>
                                                            <input 
                                                              type="checkbox" 
                                                              id="KMT-7037" 
                                                              value="KMT-7037" 
                                                              v-model="checkedFormations"
                                                            >
                                                              <label for="KMT-7037">KMT-7037</label>
                                                      </div>
                                                  </div>
                                                  <div class='thing__header__body__seba'>
                                                            <p>Seba : Préhistoire et histoire ancienne. </p> 
                                                      <div class='thing__header__body__seba__box'>
                                                            <input 
                                                              type="checkbox" 
                                                              id="KMT-7047" 
                                                              value="KMT-7047" 
                                                              v-model="checkedFormations"
                                                            >
                                                              <label for="KMT-7047">KMT-7047</label>
                                                      </div>
                                                    </div>
                                                  <div class='thing__header__body__seba'>
                                                              <p>Seba Initiation mdw ntr grammaire 2 : Historiographie diopienne. </p>
                                                        <div class='thing__header__body__seba__box'>
                                                            <input 
                                                              type="checkbox" 
                                                              id="KMT-7057" 
                                                              value="KMT-7057" 
                                                              v-model="checkedFormations"
                                                            >
                                                            <label for="KMT-7057">KMT-7057</label>
                                                        <div>
                                                  <div>
                                </div>
                                </div>
                                </div>
                                </div>
                                <button @click="myFunction()">Validation SEBA</button>

                                </div>
                                </div>
          </form>
    </div> 
</div>
<!-- <a @click="goback()">back</a> -->
<!-- <router-link  to="/page-formation-diplomante"> -->

</template>

<script>
  import axios from 'axios';
  export default {
    components: {
    },
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
