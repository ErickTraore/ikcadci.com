<template>
    <div class='thing'>
        <div  class='thing__header'>
            <div class='thing__header__body'>
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
                                                          <button type="submit">Validation inscription</button>
                                                          </div>
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
