<template>
    <div id="app">
        <div class="container">
                    <div class="row">
                                <div class="col-md-12 internalPadding">
                                  <div class="blueBar" @click="isShow['Star'] = !isShow['Star']" :class="{'red': isShow['Star']}">
                                    <div class="d-flex">
                                      <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp;Envoyez mes documents(uniquement fichier 'png' ou 'jpeg') </h2>
                                      <div class="ml-auto">
                                        <i class="fas fa-plus ml-auto"></i>
                                      </div>
                                    </div>
                                  </div><!-- End BlueBar -->
                                </div><!-- End col -->
                    </div><!-- End Row -->
                    <transition name="slide">
                        <div class="row content internalPadding" v-if="isShow['Star']">
                            <div class="col-12">

                                <div class="row">
                                          <div class="col-md-12 internalPadding">
                                                          <div class="blueBar" @click="isShow['Diehard'] = !isShow['Diehard']" :class="{'red': isShow['Diehard']}">
                                                            <div class="d-flex">
                                                              <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Photo </h2>
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
                                          <PiecePhotoComponent />
                                        </div><!-- End Col -->
                                    </div><!-- End Row -->
                                </transition>

                                <div class="row">
                                    <div class="col-md-12 internalPadding">
                                              <div class="blueBar" @click="isShow['Predator'] = !isShow['Predator']" :class="{'red': isShow['predator']}">
                                                <div class="d-flex">
                                                  <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;Justificatif d'identité </h2>
                                                  <div class="ml-auto">
                                                    <i class="fas fa-plus ml-auto"></i>
                                                  </div>
                                                </div>
                                              </div><!-- End BlueBar -->
                                    </div><!-- End col -->
                                </div><!-- End Row -->
                                <transition name="slide">
                                    <div class="row content internalPadding" v-if="isShow['Predator']">
                                        <div class="col-12">
                                            <PieceIdentiteComponent />
                                        </div><!-- End Col -->
                                    </div><!-- End Row -->
                                </transition>

                                <div class="row">
                                    <div class="col-md-12 internalPadding">
                                              <div class="blueBar" @click="isShow['DiehardDeux'] = !isShow['DiehardDeux']" :class="{'red': isShow['DiehardDeux']}">
                                                <div class="d-flex">
                                                  <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;Justificatif d'adresse </h2>
                                                  <div class="ml-auto">
                                                    <i class="fas fa-plus ml-auto"></i>
                                                  </div>
                                                </div>
                                              </div><!-- End BlueBar -->
                                    </div><!-- End col -->
                                </div><!-- End Row -->
                                <transition name="slide">
                                    <div class="row content internalPadding" v-if="isShow['DiehardDeux']">
                                        <div class="col-12">
                                            <PieceAdresseComponent />
                                        </div><!-- End Col -->
                                    </div><!-- End Row -->
                                </transition>

                                <div class="row">
                                    <div class="col-md-12 internalPadding">
                                              <div class="blueBar" @click="isShow['DiehardTrois'] = !isShow['DiehardTrois']" :class="{'red': isShow['DiehardTrois']}">
                                                <div class="d-flex">
                                                  <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;Votre dernier diplôme </h2>
                                                  <div class="ml-auto">
                                                    <i class="fas fa-plus ml-auto"></i>
                                                  </div>
                                                </div>
                                              </div><!-- End BlueBar -->
                                    </div><!-- End col -->
                                </div><!-- End Row -->
                                <transition name="slide">
                                    <div class="row content internalPadding" v-if="isShow['DiehardTrois']">
                                        <div class="col-12">
                                            <PieceDiplomeComponent />
                                        </div><!-- End Col -->
                                    </div><!-- End Row -->
                                </transition>

                                <div class="row">
                                    <div class="col-md-12 internalPadding">
                                              <div class="blueBar" @click="isShow['DiehardQuatre'] = !isShow['DiehardQuatre']" :class="{'red': isShow['DiehardQuatre']}">
                                                <div class="d-flex">
                                                  <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;Lettre de motivation </h2>
                                                  <div class="ml-auto">
                                                    <i class="fas fa-plus ml-auto"></i>
                                                  </div>
                                                </div>
                                              </div><!-- End BlueBar -->
                                    </div><!-- End col -->
                                </div><!-- End Row -->
                                <transition name="slide">
                                    <div class="row content internalPadding" v-if="isShow['DiehardQuatre']">
                                        <div class="col-12">
                                            <PieceMotivationComponent />
                                        </div><!-- End Col -->
                                    </div><!-- End Row -->
                                </transition>

                            </div><!-- End Col -->
                        <div class="col-md-12 internalPadding" style="margin-top: 15px;">
                            <div @click="isShow['Star'] = !isShow['Star']">
                                <div class="d-flex">
                                    <button class="ml-auto">
                                      <slot>Fermez</slot>
                                    </button>
                            </div>
                        </div>
                    </div><!-- End Col -->
                </div><!-- End Row -->
            </transition>
        </div><!-- End Container -->
    </div><!-- End App -->
</template>
<script>
import PiecePhotoComponent from '@/components/PiecePhotoComponent.vue'
import PieceDiplomeComponent from '@/components/PieceDiplomeComponent.vue'
import PieceIdentiteComponent from '@/components/PieceIdentiteComponent.vue'
import PieceMotivationComponent from '@/components/PieceMotivationComponent.vue'
import PieceAdresseComponent from '@/components/PieceAdresseComponent.vue'

  import axios from 'axios';
  export default {
    components: {
    PiecePhotoComponent,
    PieceDiplomeComponent,
    PieceIdentiteComponent,
    PieceAdresseComponent,
    PieceMotivationComponent,
  },
    name: 'PageProfil',
    data() {
      return{
        mdp: "*****",
      title: "Hello",
      isShow: {
        'Star': false,
        'Diehard': false,
        'DiehardDeux': false,
        'DiehardTrois': false,
        'DiehardQuatre': false,
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
          acceptOne: '',
          acceptTwo: ''
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
        })
        .catch((error) => console.log(error()))
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
              this.profile = response.data
              // window.location.reload()

          })
          .catch(error => console.log(error()))
          e.preventDefault()
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
          .catch(error => {
              console.error(error)
            })
      }
    }
    }
</script>