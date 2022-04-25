<template>
    <div class='thing'>
        <div id="app" class='thing__header'>
                <div class='thing__header__body'>
                    <div class='thing__header__body__title'> Formulaire d'inscription</div>
                </div>
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
          <!-- <div>Biographie: {{ profile.biographie}}</div> -->
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
            <!-- <div>picked: {{ profile.picked}}</div> -->
            <div>Formation selectionnée: {{ profile.seshsw}}</div>
            <div>Formation selectionnée: {{ profile.seshswNsw}}</div>
            <div>Formation selectionnée: {{ profile.seba}}</div>
            <form @submit="postData" method="post">
                <div class='thing__header__body__maj'>
                    <!-- item 2 -->
                    <div class='thing__header__body__maj__title'>
                         seshsw seshswNsw seba
                    </div>
                  <!-- item 7 -->
                    <div class='thing__header__body'>
                          <label>Sélection de ma formation</label>
                            <input 
                          type="radio" 
                          id="seshsw-s1" 
                          value="seshsw-s1" 
                          v-model="posts.seshsw">
                          <label for="seshsw-s1">seshsw-semestre-1</label>
                          <input 
                          type="radio" 
                          id="seshsw-s2" 
                          value="seshsw-s2" 
                          v-model="posts.seshsw">
                          <label for="seshsw-s2">seshsw-semestre-2</label>
                            <input 
                          type="radio" 
                          id="seshsw-s3" 
                          value="seshsw-s3" 
                          v-model="posts.seshsw">
                          <label for="seshsw-s3">seshsw-semestre-3</label>  
                          <input 
                          type="radio" 
                          id="seshsw-s4" 
                          value="seshsw-s4" 
                          v-model="posts.seshsw">
                          <label for="seshsw-s4">seshsw-semestre-4</label>
                            <button type="submit">Soumettre</button>
                        </div>

                        <div class='thing__header__body'>
                          <label>Sélection de ma formation</label>
                            <input 
                          type="radio" 
                          id="seshswnsw-s1" 
                          value="seshswnsw-s1" 
                          v-model="posts.seshswNsw">
                          <label for="seshswnsw-s1">seshswnsw-semestre-1</label>
                          <input 
                          type="radio" 
                          id="seshswnsw-s2" 
                          value="seshswnsw-s2" 
                          v-model="posts.seshswNsw">
                          <label for="seshswnsw-s2">seshswnsw-semestre-2</label>
                            <input 
                          type="radio" 
                          id="seshswnsw-s3" 
                          value="seshswnsw-s3" 
                          v-model="posts.seshswNsw">
                          <label for="seshswnsw-s3">seshswnsw-semestre-3</label>  
                          <input 
                          type="radio" 
                          id="seshswnsw-s4" 
                          value="seshswnsw-s4" 
                          v-model="posts.seshswNsw">
                          <label for="seshswnsw-s4">seshswnsw-semestre-4</label>
                            <button type="submit">Soumettre</button>
                        </div>
                        <div class='thing__header__body'>
                                  <input type="checkbox" id="jack" value="Jack" v-model="posts.seba">
                                  <label for="jack">Jack</label>
                                  <input type="checkbox" id="john" value="John" v-model="posts.seba">
                                  <label for="john">John</label>
                                  <input type="checkbox" id="mike" value="Mike" v-model="posts.seba">
                                  <label for="mike">Mike</label>
                                  <button type="submit">Soumettre</button>
                                  <span>formation(s) selectionnée(s) : {{ posts.seba }}</span>
                        </div>

                    </div>
            </form>
        </div>

    </div>
</template>

<script>
  import axios from 'axios';
// import { mapState } from 'vuex';

  export default {
    data() {
      return {
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
          seshswNsw: '',
          seba: []
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
        })
        .catch(error => console.log(error()))
    },
    methods: {
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
<style lang="scss" scoped></style>
