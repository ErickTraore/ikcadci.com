<template>
    <div id="app">
       <div class="container">
            <div class="row">
            <div class="col-md-12 internalPadding">
                          <div class="blueBar" @click="isShow['Diehard'] = !isShow['Diehard']" :class="{'red': isShow['Diehard']}">
                            <div class="d-flex">
                              <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Infos inscription </h2>
                              <div class="ml-auto">
                                <i class="fas fa-plus ml-auto"></i>
                              </div>
                            </div>
                          </div><!-- End BlueBar -->
            </div><!-- End col -->
            </div><!-- End Row -->
            <transition name="slide">
            <div class="row content internalPadding" v-if="isShow['Diehard']">
            <div class="col-12">
            <!--Debut integration-2 texe info-indcription-->
            <div class='thing'>
              <div class='thing__header'>
                  <div class='thing__header__body__maj'>
                      <div class='thing__header__body__title'> Mes infos</div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Nom:</div>
                          <div class='thing__header__body__content__saveTwo'>{{ profile.username }}</div>
                      </div>
                      <div class='thing__header__body__content' v-if='profilelastname'>
                          <div class='thing__header__body__content__saveOne'>Prenom:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.lastname }}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Email: </div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.email }}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Nom Tradition:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.usernameTradition}}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Prenom Tradition:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.lastnameTradition}}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Date Naissance:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.dateBirthday}}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Ville Naissance:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.townBirthday}}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>sexe:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.sexe}}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>nationalite:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.nationalite}}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>adresseResid:</div>
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
                          <div class='thing__header__body__content__saveOne'>tel2:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.tel2}}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>tel3:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.tel3}}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Profession<sup>*</sup>:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.profession }}</div>
                      </div> 
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Activite:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.activite }}</div>
                      </div>
                  </div>
                 
                  <div class="col-md-12 internalPadding" style="margin-top: 15px;">
                            <div @click="isShow['Diehard'] = !isShow['Diehard']">
                              <div class="d-flex">
                              <button class="ml-auto">
                                <slot>Fermer</slot>
                              </button>
                              </div>
                            </div>
            </div>
              </div>
            </div>



            <!--fin integration-2 texe info-inscription-->
            </div><!-- End Col -->
            <!-- End Col -->
            </div><!-- End Row -->
            </transition>
            </div><!-- End Col -->
      </div><!-- End Container -->
</template>
<script>
  import axios from 'axios';
  export default{
    name: 'PageProfil',
    data() {
        return{
          profileusername: false,
          profilelastname: false,
      title: "Hello",
      isShow: {
        'Star': false,
        'Diehard': false,
        'Predator': false,
         },
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
          seba: '',
          profession: '',
          activite: '',
      }
    }
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
      if(this.profile.username != ''){this.profileusername = false} else{this.profileusername = true}
      if(this.profile.lastname != ''){this.profilelastname = false} else{this.profilelastname = true}
     
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
<style>
    $body-color: #818181;
    $border: #DDDDDD;
    $yellow: #FFB715;
    $white: #ffffff;
    $purple: #800080;
    $nav-bg: #F5F7FA;
    $white: #ffffff;
    $background-image-linear-blue: linear-gradient(to bottom, #016BA8, #569BCA, #9FC5E8);
    $orange: #FFB715;
    $blue:#016BA8;
    $muted:#707070;
    $border: #DDDDDD;
    $purple: linear-gradient(180deg, rgba(226,48,219,1) 7%, rgba(193,53,163,1) 41%, rgba(119,21,128,1) 94%);

body{
  background: $purple;
  height: 100vh;
}

.seperator {
        margin-top: 25px;
        border-top: 1px solid $nav-bg;
        padding-top: 25px;
    }

.blueBar {
    background: $nav-bg;
    color: $muted;
    padding: 15px 20px;
    margin-top: 15px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius: 50px;
    &:hover {
      opacity: 0.8;
        cursor: pointer;
        transition: all 1s;
        h5 {
            color: $white;
        }
    }

    h2 {
        text-transform: uppercase;
        margin: 0;
        color: $muted;
        font-size: 16px;
    }
    .fa-bars {
        transform: rotate(90deg);
    }
}

.red {
    .fa-chevron-down,
    .fa-plus {
        animation: rotate-in 0.5s forwards;
    }
    @keyframes rotate-in {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(45deg);
        }
    }
}

.slide-enter-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
    max-height: 100px;
    overflow: hidden;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}

.content{
  margin-top: 20px;
  background: none;
  color: $white;
}

.internalPadding {
    padding: 0 11px;
}

button{
  background: #nag-bg;
  color: $muted;
  border: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding:5px 15px;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  transition: all 1s;
  &:hover{
    background: $yellow;
    box-shadow: none;
    cursor: pointer;
  }&:focus{
    outline: none;
  }
}

.tab-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}

 h1 {
        text-transform: uppercase;
        margin: 0;
        color: $nav-bg;
        font-size: 48px;
        letter-spacing: 25px;
        margin-bottom: 1rem;
        font-weight: light;
        
    }
</style>