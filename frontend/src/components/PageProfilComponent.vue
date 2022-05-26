<template>
    <div id="app">
       <div class="container">
            <div class="row">
                        <div class="col-md-12 internalPadding">
                          <div class="blueBar" @click="isShow['Star'] = !isShow['Star']" :class="{'red': isShow['Star']}">
                            <div class="d-flex">
                              <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp;Mon profil </h2>
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
        <!--Debut integration-1 -->
 <div class="row">
          <div class="col-md-12 internalPadding">
                          <div class="blueBar" @click="isShow['Diehard'] = !isShow['Diehard']" :class="{'red': isShow['Diehard']}">
                            <div class="d-flex">
                              <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Infos profil </h2>
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
                      <div class='thing__header__body__title'> Mon profil</div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Nom:</div>
                          <div class='thing__header__body__content__saveTwo'>{{ profile.username }}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Prenom:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.lastname }}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Email: </div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.email }}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="usernametradition">
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
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Conditons Générales:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.acceptOne }}</div>
                      </div>
                      <div class='thing__header__body__content'>
                          <div class='thing__header__body__content__saveOne'>Conditons Particulières:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.acceptTwo }}</div>
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
<!--fin integration-2 texe info-indcription-->
          </div><!-- End Col -->
          <!-- End Col -->
          </div><!-- End Row -->
            </transition>
            <div class="row">
          <div class="col-md-12 internalPadding">
                          <div class="blueBar" @click="isShow['Predator'] = !isShow['Predator']" :class="{'red': isShow['Diehard']}">
                            <div class="d-flex">
                              <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;Création profil </h2>
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
        <!--Debut integration-3 -->
    <div class='thing'>
        <div id="app" class='thing__header'>
          <form @submit="postData" method="post">
                <div class='thing__header__body__maj--background'>
                    <!-- item 1 -->
                    <!-- item 2 -->
                    <div class='thing__header__body__maj__title'>
                         Mise à jour de Mon profil
                    </div>
                    <div class='thing__header__body'>

                            <label>Mettre à jour mon<span> prénom</span> </label>
                            <textarea
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Prenom"
                                    type="text"
                                    v-model="posts.lastname"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                    </div>
                    <!-- item 3 -->
                    <div class='thing__header__body'>
                            <label>Nom Traditionel</label>
                            <textarea
                                    id="usernameTradition"
                                    name="usernameTradition"
                                    placeholder="Nom-traditionel"
                                    type="text"
                                    v-model="posts.usernameTradition"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                    </div>
                    <!-- item 4 -->
                    <div class='thing__header__body'>
                            <label>Prénom-traditionel</label>
                            <textarea
                                    id="lastnameTradition"
                                    name="lastnameTradition"
                                    placeholder="Prenom-traditionel"
                                    type="text"
                                    v-model="posts.lastnameTradition"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                        </div>
                    <!-- item 5 -->
                    <div class='thing__header__body'>
                            <label>Date de naissance</label> 
                            <textarea
                                    id="dateBirthday"
                                    name="dateBirthday"
                                    placeholder="jour/mois/année"
                                    type="text"
                                    v-model="posts.dateBirthday"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                        </div>
                  <!-- item 6 -->
                    <div class='thing__header__body'>
                            <label>Ville de naissance</label>
                            <textarea
                                    id="townBirthday"
                                    name="townBirthday"
                                    placeholder="Ville de naissance"
                                    type="text"
                                    v-model="posts.townBirthday"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                        </div>
                  <!-- item 7 -->
                    <div class='thing__header__body'>
                          <label>Civilité</label>
                            <input 
                          type="radio" 
                          id="homme" 
                          value="homme" 
                          v-model="posts.sexe">
                          <label for="homme">homme</label>
                          <input 
                          type="radio" 
                          id="femme" 
                          value="femme" 
                          v-model="posts.sexe">
                          <label for="femme">femme</label>
                            <button type="submit">Soumettre</button>
                        </div>
                  <!-- item 8 -->
                    <div class='thing__header__body'>
                            <label>Nationalité</label> 
                            <textarea
                                    id="nationalite"
                                    name="nationalite"
                                    placeholder="Nationalité"
                                    type="text"
                                    v-model="posts.nationalite"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                        </div>
                  <!-- item 9 -->
                    <div class='thing__header__body'>
                            <label>Adresse postale de résidence</label>
                            <textarea
                                    id="adresseResid"
                                    name="adresseResid"
                                    placeholder="Adresse postale"
                                    type="text"
                                    v-model="posts.adresseResid"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                        </div>
                  <!-- item 10 -->
                    <div class='thing__header__body'>
                            <label>Ville de résidence</label>
                            <textarea
                                    id="villeResid"
                                    name="villeResid"
                                    placeholder="Ville de résidence"
                                    type="text"
                                    v-model="posts.villeResid"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                        </div>
                  <!-- item 11 -->
                    <div class='thing__header__body'>
                            <label>Pays de résidence</label>
                            <textarea
                                    id="paysResid"
                                    name="paysResid"
                                    placeholder="Pays de Résidence"
                                    type="text"
                                    v-model="posts.paysResid"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                        </div>
                  <!-- item 12 -->
                    <div class='thing__header__body'>
                            <label>Telephone</label>
                            <textarea
                                    id="tel1"
                                    name="tel1"
                                    placeholder="tel-1"
                                    type="text"
                                    v-model="posts.tel1"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                        </div>
                  <!-- item 13 -->
                    <div class='thing__header__body'>
                            <label>Inserez <span> N° de  tel wats'app</span></label> 
                            <textarea
                                    id="tel2"
                                    name="tel2"
                                    placeholder="tel-2"
                                    type="text"
                                    v-model="posts.tel2"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                        </div>
                  <!-- item 14 -->
                    <div class='thing__header__body'>
                            <label>Inserez un 3eme N°(facultatif)</label>
                            <textarea
                                    id="tel3"
                                    name="tel3"
                                    placeholder="tel-3"
                                    type="text"
                                    v-model="posts.tel3"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                    </div>
                  <!-- item 15 -->
                    <div class='thing__header__body'>
                            <label>Profession)</label>
                            <textarea
                                    id="profession"
                                    name="profession"
                                    placeholder="profession"
                                    type="text"
                                    v-model="posts.profession"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                    </div>
                  <!-- item 16 -->
                    <div class='thing__header__body'>
                            <label>Activite</label>
                            <textarea
                                    id="activite"
                                    name="activite"
                                    placeholder="activite"
                                    type="text"
                                    v-model="posts.activite"
                            ></textarea>
                            <button type="submit">Soumettre</button>
                    </div>
                    <div class='thing__header__body'>
                                  <input
                                          type="checkbox"
                                          v-model="posts.acceptOne"
                                          id="acceptOne"
                                          class="form-check-input"
                                  >
                                <label class="form-check-label" for="acceptOne"> - J'ai lu les conditions générales.
                                </label>
                            <button type="submit">Soumettre</button>
                    </div>
                      <div class='thing__header__body'>
                                  <input
                                          type="checkbox"
                                          v-model="posts.acceptTwo"
                                          id="acceptTwo"
                                          class="form-check-input"
                                  >
                                <label class="form-check-label" for="acceptTwo"> - J'ai lu les conditions particulières.
                                </label>
                            <button type="submit">Soumettre</button>
                    </div>
              </div>
          </form>
            <div class="col-md-12 internalPadding" style="margin-top: 15px;">
                            <div @click="isShow['Predator'] = !isShow['Predator']">
                              <div class="d-flex">
                              <button class="ml-auto">
                                <slot>Fermez</slot>
                              </button>
                              </div>
                            </div>
            </div>
        </div>
        
    </div>
        <!--Fin integration-3 --> 
                        <!-- End Col -->
        </div><!-- End Col -->
            </div><!-- End Row -->
            </transition>
            </div><!-- End Col -->
        <!-- Fin integration-1 -->
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
  import axios from 'axios';
  export default{
    name: 'PageProfil',
    data() {
        return{
      usernametradition: false,
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
          acceptOne: '',
          acceptTwo: ''
      },
          
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
          if(this.profile.usernameTradition){
            this.usernametradition=true
          }
          console.log(this.usernametradition)
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
              window.location.reload();

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
          .catch(error => {
              console.error(error);

            })

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
    padding: 0 25px;
}

button{
  background: #nag-bg;
  color: $muted;
  border: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding:5px 15px;
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.35);
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