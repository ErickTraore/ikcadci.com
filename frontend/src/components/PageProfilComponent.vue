<template>
    <div id="app">
       <div class='thing'>
              <div class='thing__header'>
                  <div class='thing__header__body__maj'>
                      <div class='thing__header__body__title'> Mon profil</div>

                      <div class="thing__header__body__content">
                          <div class='thing__header__body__content__saveOne'>Nom:</div>
                          <div class='thing__header__body__content__saveTwo'>{{ profile.user.username}}</div>
                      </div>

                      <div class="thing__header__body__content">
                          <div class='thing__header__body__content__saveOne'>Email: </div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.user.email}}</div>
                      </div>

                      <div class="thing__header__body__content">
                          <div class='thing__header__body__content__saveOne'>Password: </div>
                          <div class='thing__header__body__content__saveTwo'> {{ mdp }}</div>
                      </div>

                      <div class="thing__header__body__content" v-if=" profile.lastname ">
                          <div class='thing__header__body__content__saveOne'>Prenom:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.user.lastname}}</div>
                      </div>

                      <div class="thing__header__body__content" v-if=" profile.usernameTradition ">
                          <div class='thing__header__body__content__saveOne'>Nom Tradition:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.usernameTradition }}</div>
                      </div>

                      <div class="thing__header__body__content" v-if=" profile.lastnameTradition ">
                          <div class='thing__header__body__content__saveOne'>Prenom Tradition:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.lastnameTradition}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if=" profile.dateBirthday ">
                          <div class='thing__header__body__content__saveOne'>Date Naissance:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.dateBirthday}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="profile.townBirthday">
                          <div class='thing__header__body__content__saveOne'>Ville Naissance:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.townBirthday}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if=" profile.sexe ">
                          <div class='thing__header__body__content__saveOne'>Civilité:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.sexe}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="profile.nationalite">
                          <div class='thing__header__body__content__saveOne'>Nationalite:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.nationalite}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if=" profile.adresseResid">
                          <div class='thing__header__body__content__saveOne'>AdresseResid:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.user.adresseResid}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if=" profile.villeResid">
                          <div class='thing__header__body__content__saveOne'>VilleResid:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.villeResid}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="profile.paysResid">
                          <div class='thing__header__body__content__saveOne'>PaysResid:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.paysResid}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="profile.tel1">
                          <div class='thing__header__body__content__saveOne'>Tel1:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.tel1}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="profile.tel2">
                          <div class='thing__header__body__content__saveOne'>Tel2:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.tel2}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="profile.tel3">
                          <div class='thing__header__body__content__saveOne'>Tel3:</div>
                          <div class='thing__header__body__content__saveTwo'>  {{ profile.user.tel3}}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="profile.profession">
                          <div class='thing__header__body__content__saveOne'>Profession<sup>*</sup>:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.user.profession }}</div>
                      </div> 
                      <div class='thing__header__body__content' v-if="profile.activite">
                          <div class='thing__header__body__content__saveOne'>Activite:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.user.activite }}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="profile.acceptOne">
                          <div class='thing__header__body__content__saveOne'>Conditons Générales:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.user.acceptOne }}</div>
                      </div>
                      <div class='thing__header__body__content' v-if="profile.acceptTwo">
                          <div class='thing__header__body__content__saveOne'>Conditons Particulières:</div>
                          <div class='thing__header__body__content__saveTwo'> {{ profile.user.acceptTwo }}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div><!-- End Container -->
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'PageProfil',
    data() {
      return{
        mdp: "*****",
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
          console.log(this.profile);
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