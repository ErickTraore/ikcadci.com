<template>
    <div class="group">
     <div v-if="loadingTemplate" class="progress conteneur">
           <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
     </div>
    <div v-else>
    <div id="app" class="group__header">
        <div>
            <div class="container" v-for="item  in pieces" :key="item .id">
                        <div class="group__header__body__first"> 
                          <div class="group__header__body__first__in"> 
                              <img :src="item.attachment" />
                              <div id="progress-bar">
                                  <div></div>
                              </div>
                              <b>Document:{{ item .User.username }}</b> du 
                              {{ new Date(item .createdAt) | dateFormat('DD/MM/YYYY') }} à
                              {{ new Date(item .createdAt) | dateFormat('hh:mm') }} réf:{{ item.User.email }} <br>
                              <div class="group__header__body__first__title"> 
                                Titre: {{ item .title }}

                                <button
                                class="btn-1"
                                v-on:click="doDelete(item .id)"
                                >
                                Suppression !
                                </button>
                            </div>
                        <ul>
                        </ul>
                          </div>
                        </div>
                       
            </div>
        </div>
      <div class='group__header__body'>
                <form @submit="onPostData" method="post" enctype="multipart/form-data" name="piece">
                    <!-- <label class="labelForm">Nouveau piece avec image optionnelle</label> <br> <br> -->
                    <p v-if="errors.length">
                        <b>Merci de corriger les erreurs suivantes : </b>
                      <ul>
                          <li v-for="error in errors" :key="error">{{ error }}</li>
                      </ul>
                   </p>
                   <h2>{{ titleValue }}</h2>
                    <input
                            v-model="titleValue"
                            type="hidden"
                    >
                    <input
                            id="title"
                            v-model="piece.title"
                            type="hidden"
                            name="title"
                    > <br> <br>
                    <input
                            id="attachment"
                            v-model="piece.attachment"
                            type="hidden"
                            name="attachment"
                    >
                    <br>
                          <div>
                            <div v-if="!image">
                            <div id="list">
                            </div>
                    <input
                            id="file"
                            type="file"
                            @change="onFileSelected"
                            name="attachment"
                            alt="example"
                    >
                          </div>
                          <div v-else>
                            <div v-if="loadingImage" class="progress">
                            <div class="value v-80 striped animate s-10">Chargement...</div>
                            </div>
                            <div v-else>
                            <img :src="image" />
                            </div>
                            <button @click="removeImage">Remove image</button>
                          </div>
                        </div><br><br>
                        <div>
                        </div>
                      <button
                      type="submit"
                      value="val"
                    >
                      Envoyer</button>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.16/vue.js"></script>
<script>
  const path = require("path");
  const isLocal = typeof process.pkg === "undefined";
  const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
  const baseUri = "ipfs://NewUriToReplace";
  
  const http = require("http");
  var req = require('request');

  import Vue from 'vue'
  import HTTP from 'http'
  import axios from 'axios';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
  import VueAxios from 'vue-axios'
  import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
  import FormData from 'form-data'
  import { mapGetters } from 'vuex'

   Vue.use(VueFilterDateFormat);
   Vue.use(VueAxios, axios);
  export default {
    name: 'SearchInputComponent',
    computed: {
      ...mapGetters(["imageExist"]),
        titleValue: {
        get() {
            return this.isValuePropSet() ? this.value : this.localValue;
        },
        set(value) {
            this.$emit("input", value);
            this.localValue = value;
        },
        },
    },
    props: {
        value: {
        type: String,
        default: "",
        },
   
    },

    data() {
      return {
        localValue: this.value,
        // loading: false,
        loadingTemplate: true,
        loadingImage: true,
              myId: Number,
              idImage: '',
              testName: Boolean,
              file: Blob,
              errors: [],
              piece: {
                title: this.value,
                attachment: '',
              },
              image:'',
              selectedFile: null,
              pieces: [],
              posts: {
                  title:'',
                  attachment:'' ,
                  loading: false
          },
          color: '#071b46',
          color1: 'red',
          size: '45px',
          margin: '2px',
          radius: '2px'
      }
    },
     components: {
    PulseLoader
    },
    created() {
       let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;

        setTimeout(() => {
      axios
        .get('https://212.227.142.69:3000/api/piece/',{
          headers: {
              'Authorization': token
            }
        })
        .then(response => {
          this.myId = myId
          this.pieces = response.data
          })
        .catch(error => console.log(error()))
        .finally(() => 
          this.loadingTemplate = false
        )
    }, 1000)
    },
  methods: {
      isValuePropSet() {
      return (
        !!this.$options.propsData && this.$options.propsData.value !== undefined
      );
    },
    resetForm() {
        console.log('Reseting the form')
        var self = this; //you need this because *this* will refer to Object.keys below`
        //Iterate through each object field, key is name of the object field`
        Object.keys(this.piece).forEach(function(key,index) {
          self.piece[key] = '';
        });
      },
    onPostData(e) {
      e.preventDefault();
        this.errors = [];
        if (!this.image) {
          this.errors.push('Veillez choisir votre pièce d\'didentité');
          }
        if (!this.piece.title) {
          this.errors.push('Veillez saisir le titre');
          }
         else if (this.piece.title.length >= 30 || this.piece.title.length <= 3){
          this.errors.push('Votre titre doit comprendre entre 4 et 30 caractères.');
        }
        if (!this.errors.length) {
          console.log('Vérification des inputs --> OK')
          return this.post(this.piece);
        }
      },
    post: function (piece, e) {
        this.$emit("title", this.titleValue);
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
        this.axios.post('https://212.227.142.69:3000/api/piece/new/', piece, {
            headers: {
              'Authorization': token
            }
          }
        )
         .then(reponse => {
           let objMySession = localStorage.getItem("obj")
           let myStorageToken = JSON.parse(objMySession)
           let token = myStorageToken.myToken;
            this.piece = reponse.data
            console.log('piece crée ok')
            axios
              .get('https://212.227.142.69:3000/api/piece/', {
            headers: {
              'Authorization': token
            }
          })
              .then(response => {
                this.pieces = response.data
                this.resetForm()
                this.image = '';
                res.status(200).json(this.pieces);
                })
              .catch(function(err) {
                err.statusCode = 401;
              });
          })
          .catch(function(err) {
                err.statusCode = 401;
              });
      },
      onFileSelected(e) {
      this.selectedFile = e.target.files[0];
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file, next) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
      if(this.image)
        return; 
        this.pushImage();
    },
    pushImage(e) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
        const util = require('util');
        var fileName = fileName;
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        console.log('Mon imageFile[0] :',imagefile.files[0]);
        formData.append("file", imagefile.files[0]);
        setTimeout(() => {
        axios
        .post('https://212.227.142.69:3000/api/piece/upload', formData, {
          headers: {
            'Authorization': token,
            'Content-Type': 'multipart/form-data' 
          }
      })   
     .then((res) => {
       console.log('valeure reçu par le back:',res.data);
       console.log('valeure res.data.idImage:',res.data.idImage);

          return res.data.idImage;
     })
     .then(function(idImage){


       const attachment = document.querySelector("#attachment");
          attachment.value = "https://212.227.142.69:3000/images/"+idImage;

          attachment.dispatchEvent(new Event('input'));

          response.status(200).json({idImage})
     })
    .catch(function(err) {
     err.statusCode = 401;
                    })
    .finally(() => 
          this.loadingImage = false
        )
          }, 1000)
  },
    removeImage: function(e) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
        var fileName = this.selectedFile.name;
        
        console.log('Envoie dufichier pour écrasement',fileName);
        var formData = new FormData();
        formData.append("file", this.selectedFile);
      
        axios.post('https://212.227.142.69:3000/api/piece/delLienImage', formData, {
          headers: {
            'Authorization': token,
            'Content-Type': 'multipart/form-data' 
          }
      })   

      this.image = '';
      console.log('Le fichier vient d\'être effacé du navigateur');
      this.piece.attachment = '';
      console.log('L\'url du fichier vient d\'être effacé du formulaire');
      e.preventDefault();
    },
    doDelete: function (id) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
        this.axios.post('https://212.227.142.69:3000/api/piece/' + id + '/del', null, {
            headers: {
              'Authorization': token
            }
          })
        .then(reponse => {
            console.log('Deleting piece-1')
            let objMySession = localStorage.getItem("obj")
            let myStorageToken = JSON.parse(objMySession)
            let token = myStorageToken.myToken;
            axios
              .get('https://212.227.142.69:3000/api/piece/', {
            headers: {
              'Authorization': token
            }
          })
              .then(response => {
                console.log('Deleting piece')
                this.pieces = response.data
                this.resetForm()
                res.status(200).json(this.pieces);
                })
               .catch(function(err) {
                err.statusCode = 401;
                });
          })
        .catch(function(err) {
              err.statusCode = 401;
              });
      },
  },
  }
</script>

<style scoped lang="scss">
    @import 'sass/main.scss';

</style>
