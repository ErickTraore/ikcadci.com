<template>
    <div id="app">
        <div class="container">
              <div class="row">
                    <div class="col-md-12 internalPadding">
                        <div class="blueBar" @click="isShow['Diehardone'] = !isShow['Diehardone']" :class="{'red': isShow['Diehardone']}">
                            <div class="d-flex">
                                <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Inscription: SESHSW  </h2>
                                <div class="ml-auto">
                                      <i class="fas fa-plus ml-auto"></i>
                                </div>
                            </div>
                        </div><!-- End BlueBar -->
                    </div><!-- End col -->
              </div><!-- End Row -->
              <transition name="slide">
              <div class="row content internalPadding" v-if="isShow['Diehardone']">
                  <div class="col-12">
                  <div class="cardPageFormation">
                      <div class='thing'>
                        <div  class='thing__header'>
                              <form @submit="postData" method="post">
                            <div class="proj__card">
                                <div class="proj__card__firstTitle"  @click="isShowingSeshsw ^= true">SESHSW</div>
                                <div class="proj__card__show"  v-show="isShowingSeshsw">
                                      <div class="proj__card__show__frame">
                                      <!-- FORMATION_1 -->
                                          <div class='thing__header__body'>
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
                                      <button type="submit">Validation inscription</button>
                                </div>
                                </div>
                                </div>
                                </div>
                       
                      </form>
                      </div>
                        </div>
                    </div>
               </div><!-- End Col -->
                          <!-- End Col -->
                </div><!-- End Row -->
              </transition>
              <div class="row">
                      <div class="col-md-12 internalPadding">
                                    <div class="blueBar" @click="isShow['Diehardtwo'] = !isShow['Diehardtwo']" :class="{'red': isShow['Diehardtwo']}">
                                        <div class="d-flex">
                                            <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Inscription: SESHSW_NSW </h2>
                                            <div class="ml-auto">
                                                  <i class="fas fa-plus ml-auto"></i>
                                            </div>
                                        </div>
                                    </div><!-- End BlueBar -->
                      </div><!-- End col -->
              </div><!-- End Row -->
              <transition name="slide">
              <div class="row content internalPadding" v-if="isShow['Diehardtwo']">
              <div class="col-12">
                      <div class='thing'>
            <div  class='thing__header'>
                  <form @submit="postData" method="post">
                <div class="proj__card">
                    <div class="proj__card__firstTitle"  @click="isShowingSeshsw ^= true">SESHSW-NSW</div>
                    <div class="proj__card__show"  v-show="isShowingSeshsw">
                          <div class="proj__card__show__frame">
                            <div class='thing__header__body'>
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
          </div>
     </div>
              </div><!-- End Col -->
              <!-- End Col -->
              </div><!-- End Row -->
              </transition>
        </div><!-- End Col -->
    </div><!-- End Container -->
</template>
<script scoped>
import axios from 'axios';
  export default {
    data: function() {
      return {
         isShow: {
        'Diehard': false,
        'Diehardone': false,
        'Diehardtwo': false,
        'Diehardtree': false,
        'Diehardfor': false,
        'Diehardfive': false,
        'Diehardsix': false,
         },
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