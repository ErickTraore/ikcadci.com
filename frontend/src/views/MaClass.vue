<template>
<div>
<!-- <a href='/#/Pages/seshsw-nsw-s1'>Ma classe: {{this.profile.seshsw}}</a> -->
<a v-bind:href="'/#/Pages/' + profile.seshsw">Ma classe: {{ this.profile.seshsw }}</a>

</div>
</template>
<script>
 import axios from 'axios';
  export default {
    data() {
      return {
          profile: '',
        message: "Je suis un yankee",
        }
        },
    created() {
      let objMySession = localStorage.getItem("obj")
      let myStorageToken = JSON.parse(objMySession)
      let token = myStorageToken.myToken;
      axios
        .get('https://212.227.142.69:3000/api/users/classroom/', {
          headers: {
            'Authorization': token
          }
        })
           .then(response => {
          this.profile = response.data
          this.testUser = this.profile.testUser
          console.log(this.profile.email) // this.$store.dispatch("beforeLogged")
      if(this.testUser == 'testOk'){
       this.$store.dispatch("beforeLogged")
      }
        })

        .catch(error => console.log(error()))
    }
}
</script>
<style>
</style>