<template>
        <div class='group__header'>
          <div class="group__header__body__btn">{{  title }}</div>
            <form @submit="postData" method="post">
            <h2>Mot de pass oublié</h2>
            <h3>Recuperez un n° confidentiel dans votre mail</h3>
                <div class='group__header__body '>
                    <p v-if="errors.length">
                        <b>Merci de corriger les erreurs suivantes : </b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                    </p>
                    <p v-if="testDb">Cet email n'existe pas</p>
                    <p>
                        <label for="email">Email* </label>
                        <input
                              id="email"
                              v-model="user.email"
                              type="email"
                              name="email"
                        ><br> <br>
                    </p>

                    <button class=" group__header__body__btn">Mdp oublié</button>
                </div>
            </form>
          <div>
              <a class="labelForm" href="#/">Conexion</a>
          </div>
        <div>
          <a class="labelForm" href="#/signup">Création de compte</a>

          </div>
        </div>
</template>

<script>
  import Vue from "vue";
  import VueAxios from "vue-axios";
  import axios from "axios";

  Vue.use(VueAxios, axios)
  export default {
    name: 'ForgetPasswordComponent',
    data() {
      return {
        data: '',
        testDb:false,
        errors: [],
        user: {
          id: null,
          email: null,
          passwait: null,
          myTimeStamp: null,
          textMailer: null,
        }, 
      
      }
    },
    methods: {
      postData: function (e) {
        e.preventDefault();
        this.errors = [];

        if (!this.user.email) {
          this.errors.push('Veillez saisir votre email');
        }
        if (!this.errors.length) {
          return this.post(this.user);
        }
      },
      post: function (user) {
        this.axios.post('https://212.227.142.69:3000/api/users/testMailNumber/', user)
          .then(response => {
            this.data = response.data
            this.testmail = this.data.testmail
            this.user.id = this.data.testId
            this.user.email = this.data.testEmail
            console.log(this.testmail);
            console.log(this.user.id);
            console.log(this.user.email);
            if(this.testmail){
                this.axios.post('https://212.227.142.69:3000/api/users/' + this.user.id +'/createNumTimes/', user)
                    .then(response => {
                            this.user.passwait = response.data.passwait
                            this.user.myTimeStamp = response.data.myTimeStamp
                            console.log(this.user.passwait);
                            console.log(this.user.myTimeStamp);
                                this.axios.post('https://212.227.142.69:3000/api/users/' + this.user.id +'/goMailerNumber/', user)
                                    .then(response => {
                                            this.textMailer = response.data
                                            console.log(this.textMailer)
                                            this.$router.push({path: '/createPass'})
                                          })
                                    .catch(error => console.log(error()))
                          })
                    .catch(error => console.log(error()))
            }else{
                  this.testDb = true
            }
            })
          .catch((error) => {
            console.log(error)
            this.$router.push({path: '/'})
            })
      },
      }
  }

</script>
<style lang="scss">
    @import 'sass/main.scss';
</style>