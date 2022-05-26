<template>
     <div id="app">

       <div class='admin'>
       <div class='admin__inscrit'>
          <div class='admin__inscrit__idEtudiant'>Liste de toutes les inscriptions </div>

                <div class='admin__inscrit__content' v-for="item  in users" :key="item .id">
                    <div class='admin__inscrit__content__div1'>
                        <div class='admin__inscrit__content__div1__case1'>

                        </div>
                        <div class='admin__inscrit__content__div1__case2'>
                            <div class='admin__inscrit__content__div1__case2__box1'>
                                Nom : {{ item .username }}
                            </div>
                            <div class='admin__inscrit__content__div1__case2__box2'>
                                Prenom : {{ item .lastname }}
                            </div>
                        </div>
                        <div class='admin__inscrit__content__div1__case3'>
                            <div class='admin__inscrit__content__div1__case3__box1'>
                                Email : {{ item .email }}
                            </div>
                            <div class='admin__inscrit__content__div1__case3__box2'>
                                Formation choisie :{{ item .seshsw }}
                            </div>
                        </div>
                    </div>
                    <div class='admin__inscrit__content__div2'>
                      <div class='admin__inscrit__content__div2__accepter'
                                @click="createInscription(item .id)">
                                  Accepter n°{{item.id }}                   
                      </div> 
                      <div class='admin__inscrit__content__div2__attente'
                                @click="createInscription(item .id)">
                                  En attente n°{{item.id }}                   
                      </div> 
                      <div class='admin__inscrit__content__div2__refuser'
                                @click="createInscription(item .id)">
                                  Refuser n°{{item.id }}                   
                      </div>
                      <div class='admin__inscrit__content__div2__supprimer'
                                @click="createInscription(item .id)">
                                  supprimer n°{{item.id }}                   
                      </div> 
                    </div>

                </div>
            </div>

          </div>
          <p> this is my idEtudiant :{{ userRead.id }}</p>
          <p> this is my emailUser data :{{ userRead.email }}</p>
          <p> this is my refFormation :{{ userRead.seshsw }}</p>
          <p> this is my idAdmin:{{ myId }}</p>




          
          </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.16/vue.js"></script>
<script>
  import Vue from 'vue'
  import axios from 'axios';
  import VueAxios from 'vue-axios'
  import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

  Vue.use(VueFilterDateFormat);
  Vue.use(VueAxios, axios)
  export default {
    data() {
      return {
        myId:Number,
        users: [],
        user: '',
        userRead: '',
        idAdmin: '',
        inscription: {
          refFormation: '',
          idAdmin: '',
          idEtudiant: '',
          content: '',
          activeInscription : 'false',
        },
         post: {
                    refFormation: 'this.userRead.seshsw',
                    idAdmin: 'this.myId',
                    idEtudiant: 'this.userRead.id',
                    content: 'Je suis un Yankee',
                    activeInscription : 'false'
          },
        }
    },
    created() {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
        let myId = myStorageToken.myId;
      axios
        .get('https://212.227.142.69:3000/api/users/',{
            headers: {
              'Authorization': token
            }
          })
        .then(response => {
          this.myId = myId
          this.users= response.data


          })

        .catch(error => console.log(error()))
    },
     methods: {
     destroyUser: function (id) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
        this.axios.post('https://212.227.142.69:3000/api/users/' + id + '/del', null, {
            headers: {
              'Authorization': token
            }
          })
              .then(response => this.users = response.data)
                    axios
                  .get('https://212.227.142.69:3000/api/users/')
                  .then(response => {
                    this.users = response.data
                    })
                  .catch(error => console.log(error()))
          .catch(error => console.log(error()))
      },
     createInscription:function (id) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
        this.axios.get('https://212.227.142.69:3000/api/users/' + id + '/read', null, {
            headers: {
              'Authorization': token
            }
          })
              .then(response => {
                  this.userRead = response.data
                })
                 axios
                  .post('https://212.227.142.69:3000/api/inscriptions/new/',{
                   headers: {
                              'Authorization': token
                            }
                   } )
                  .then(function (response) {
                    this.inscriptions = response.data
                    console.log(this.inscription);
                    })
                  .catch(error => console.log(error()))
              .catch(error => console.log(error()))
      },
      }
      }

</script>
<style scoped>

</style>