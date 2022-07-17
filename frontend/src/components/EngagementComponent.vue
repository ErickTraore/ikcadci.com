<template>
    <div>
    <div> Je déclare avoir pris connaissance des informations générales contenues sur ce site et relative à mon inscription.
    </div>
    <form @submit="postData" method="post">
        <p>
            <span>     
                <input 
                    type="checkbox" 
                    v-model="posts.acceptOne" 
                    id="acceptOne" 
                    class="form-check-input"
                >
            </span> 
            <label class="form-check-label" for="acceptOne"> - Lu et approuvé sans aucune restriction
            </label>
        </p>
        <div v-if="errors.length">
            <p>Merci de corriger les erreurs suivantes : </p>
            <ul>
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
        </div>
        <button class="group__header__body__btn"> Validez </button>
    </form>
    </div>
</template>
<script>
 import Vue from "vue";
 import VueAxios from "vue-axios";
 import axios from "axios";
  Vue.use(VueAxios, axios)
export default{
    name: 'ConditionComponent',
    data(){
        return{
          errors: [],
        posts: {
         acceptOne: false,
         acceptTwo: false,
        },
        isShowingGle: false,
        isShowingOne: false,
        isShowingTwo: false,
        isShowingTree: false,
        isShowingFor: false,
        isShowingFive: false,
        isShowingSix: false,
        isShowingSeven: false,
        isShowingHeigth: false,
        isShowingNine: false,
        isShowingTen: false,
        isShowingEleven: false,
        isShowingTwelve: false,
        isShowingFinale: false,
                  accept: true,
                 title: "Hello",
      isShow: {
        'Diehardone': false,
        'Diehardtwo': false,

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
          // this.testUser = this.profile.testUser
          // this.$store.dispatch("beforeLogged")
      // if(this.testUser == 'testOk'){
      //  this.$store.dispatch("beforeLogged")
      // }
        })
        .catch(error => {
           this.$store.dispatch("beforeLogged")
                    this.$router.push({path: '/'});
                    return console.log(error())
        })
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
            this.profile.acceptOne= response.data.acceptOne
            this.profile.acceptTwo= response.data.acceptTwo
          })
          .catch(error => console.log(error()))

        e.preventDefault();
      }
    }
}
</script>
