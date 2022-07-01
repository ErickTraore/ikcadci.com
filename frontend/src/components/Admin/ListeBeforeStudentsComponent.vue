<template>
    <div>
        <div>
            <h3>Procéssus de validation des inscriptions</h3>
        </div>
        <div v-if="templateEmail">
              <div v-if="templateView">
                <table>
                  <tbody>
                      <ul>
                          <tr>
                            <td>N°</td>
                            <td>Réf</td>
                            <td>Nom</td>
                            <td>Prenom</td>
                            <td>Email</td>
                            <td>Actions</td>
                          </tr>
                      </ul>

                      <ul id="studentVerif" v-for="item in items" :key="item.students">
                              <tr>
                                    <td>{{ item.id }}</td>
                                    <td>
                                    {{ new Date(item.createdAt) | dateFormat('DDMMYY')}}
                                    {{new Date(item.createdAt) | dateFormat('hhmm')}}-{{item.UserId}}
                                    </td>
                                    <td>{{ item.username }}</td>
                                    <td>{{ item.lastname }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>
                                        <div>
                                            <button 
                                                id="button"
                                                v-on:click="doSeen(item.UserId)">
                                                Consulter
                                            </button>
                                        </div> 
                                        <div> 
                                            <button 
                                                v-on:click='goStudent(item.UserId)'
                                                >
                                                Envoyez un mail.
                                            </button>
                                        </div>
                                    </td>
                              </tr>
                      </ul>
                    </tbody>
                </table>
              </div>
              <div v-else>
                      <div>
                          <div>
                              <h3>Traitement dossier etudiant</h3>
                          </div>
                    <div class="p">
                        <div class="p__Form">
                            <div class="p__Form__head">
                                <div class="p__Form__head__title">INSTITUT KEMETMAAT-CHEIKH ANTA DIOP 
                                        ASSOCIATION KEMETMAAT 
                                </div>
                            </div>
                            <div class="p__Form__header">
                                        Face Inspection Générale  du Ministère de l’Environnement
                                        kemetmaatabidjan@gmail.com
                                        Whatsaap kemetmaat : 225 0758662960 
                            </div>
                            <div class="p__Form__articleun">
                                Formulaire d'inscription 
                                <p>Réf:
                                                  {{ new Date(student .createdAt) | dateFormat('DDMMYY') }}
                                                  {{ new Date(student .createdAt) | dateFormat('hhmm') }}-{{ student.id }}
                              </p>
                            </div>
                            <div class="p__Form__articledeux">
                                La campagne d’inscription aux enseignements en ligne de la deuxième session  de l’année 2022 se déroulera du 1er avril au 30 juin. Les cours débutent le vendredi 1er juillet 2022 avec un réunion de présentation en live. Les places étant limitées, il est conseillé de nous retourner le bulletin le plus tôt possible. Pour des informations détaillées ; demandez la « note de présentation du seshw et seshw-nsw de kamitologie » et « le catalogue-descriptif des formations » à l’adresse mail: kemetmaatabidjan@gmail.com
                            </div>

                      <div class="p__Form__block">
                        <div class="p__Form__block__titre">1 - Situation à l’ Etat Civil</div>
                        <div class="p__Form__block__view">
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Nom :</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.username }}
                                </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Prénom :</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.lastname }}
                                  </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Né(é) le :</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.dateBirthday }}
                                </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">A :</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.townBirthday}}
                                </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Sexe :</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.sexe}}
                                </div>
                            </div>
                      </div>

                        <div class="p__Form__block__titre">2 – Identité culturelle africaine</div>
                        <div class="p__Form__block__view">
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Nom tradition:</div>
                                <div class="p__Form__block__view__content__input"> 
                                                {{ student.usernameTradition }} 
                                </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Prénom tradition:</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.lastnameTradition }}
                                </div>
                            </div>
                        </div>
                        <div class="p__Form__block__titre">3 –Adresse de résidence</div>
                        
                        <div class="p__Form__block__view">
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Adresse:</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.adresseResid }}
                                </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">ville:</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.villeResid }}
                                </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Email:</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.email }}
                                </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Tél-1:</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.tel1 }}
                                </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Tél-2:</div>
                                <div class="p__Form__block__view__content__input">
                                              {{ student.tel2 }}
                                </div>
                            </div>
                            <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Tél-3:</div>
                                <div class="p__Form__block__view__content__input"> 
                                              {{ student.tel3 }}
                                </div>
                            </div>
                      </div>
                      <div class="p__Form__block__titre">4 –Situation professionnelle </div>
                      <div class="p__Form__block__view">
                      <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Profession
                                </div>
                                <div class="p__Form__block__view__content__input">  
                                              {{ student.profession }}
                                </div>
                      </div> 
                        <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label">Activite:</div>
                                <div class="p__Form__block__view__content__input">  
                                              {{ student.activite }}
                                  </div>
                        </div>
                        </div>
                        <div class="p__Form__block__titre">5 –Choix de formation  </div>
                        <div class="p__Form__block__view">
                        <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label--bis">Inscription SEHSW:</div>
                                <div class="p__Form__block__view__content__input--bis">    
                                              {{ student.seshsw }}
                                  </div>
                        </div>
                        <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label--bis">Inscription SEBA:</div>
                                <div class="p__Form__block__view__content__input--bis">    
                                              {{ student.seba }}
                                  </div>
                        </div>
                        </div>
                        <div class="p__Form__block__titre">6 –Signature et engagement  </div>
                        <div class="p__Form__block__view">
                        <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label--bis">Lu et approuvé:</div>
                                <div class="p__Form__block__view__content__input--bis">    
                                {{ acceptOne }}
                                  </div>
                        </div>
                        <div class="p__Form__block__view__content">
                                <div class="p__Form__block__view__content__label--bis">Lu et approuvé:</div>
                                <div class="p__Form__block__view__content__input--bis">    
                                  {{ acceptTwo }}
                                  </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
              </div>
              <div>
                  <h3>Documents etudiants</h3>
                  <div class="group__header">
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
                                          v-on:click="doDie(item .id)"
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
                  </div>
              </div>
              <div v-if="!templateView">
                <GoMailerComponent>
                    <button
                    @click='theMailer'
                    >
                    Dossier test
                    </button>
                    <button
                    v-on:click='goOfMailer'
                    >
                    Dossier conforme Demande de paiement
                    </button>
                <GoMailerComponent />
              </div>
            </div>
            <div v-else>
              <div>

                <div class="pageconforme__titre">
                    <h2>Votre inscription du: {{ new Date(student .createdAt) | dateFormat('DDMMYY') }}
                    </h2>
                    </div>
                <div class="pageconforme__content">
                    <div class="pageconforme__content__identite">
                    <div class="pageconforme__content__identite__div">Kemetmaat, le: {{ new Date(student .createdAt) | dateFormat('DDMMYY') }}
                    </div><br><br>
                    <div class="pageconforme__content__identite__div">Email {{ student.email }}</div>
                    <div class="pageconforme__content__identite__div">Prenom {{ student.username }}</div>
                    <div class="pageconforme__content__identite__div"><p>Réf:
                                                                      {{ new Date(student .createdAt) | dateFormat('DDMMYY') }}
                                                                      {{ new Date(student .createdAt) | dateFormat('hhmm') }}-{{ student.id }}
                                                                  </p></div>
                    <div class="pageconforme__content__paiement__div3">Votre formation: {{ student.seba }} {{ student.seshsw }}</div>
                    <div class="pageconforme__content__paiement__div3">Tarif formation: Traore</div>
                    <div class="pageconforme__content__paiement__div3">Delai de paiement: 72h</div>
            </div>
            </div>

            <div>
                <form
                >
                    <select
                            v-model="posts.message"
                            onchange="document.getElementById('text').value=this.value"
                            >
                            <option value="uinscription validée sous réserve de votre paiement dans un délai de 72heures. detailed information and change your preferences before consenting or to 
                                                    refuse consenting.Please note that some processing of your personal data may not 
                                                    require your consent, but ">Objet: Dossier accepté en attente de paiement</option>
                            <option value="dossier incomplet. Pièces manquante. 72 de délai de retour.enting.Please note that some processing of your personal data may not 
                                                    require your consent, but ">Objet: Dossier incomplet. Pièces manquantes.</option>
                            <option value="Dossier refusé pour non respect des conditions académiques  requises, detailed information and change your preferences before consenting or to 
                                                    refuse consenting.Please note that some processing of your personal data may not 
                                                    require your consent, but ">Objet: Dossier refusé</option>
                    </select>

                  <label for="message">Message</label>
                  <input 
                  name="message"
                  type="text" 
                  id="message"
                  v-model="posts.message"
                  >

                   <button 
                    v-on:click="goMailer(student.UserId)">
                    Accepter-Completez-Refuser
                   </button>
                   
                   <button 
                    v-on:click="goMailer(student.UserId)">
                    Supprimez
                   </button>
                </form>
            </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios';
  import VueAxios from 'vue-axios'
  import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
  import GoMailerComponent from '@/components/GoMailerComponent.vue';
  Vue.use(VueFilterDateFormat);
  Vue.use(VueAxios, axios);

  export default{
     components: {
    GoMailerComponent
    },
    name: 'ListeBeforeStudentsComponent',
    data() {
        return{
          posts:{
                message: ''
                },
      templateEmail: false,
      userId: '',
      pieces: '',
      student: '',
      students: '',
      items: '',
      item: '',
      profile: '',
      templateView: true,
    }
},
    created() {
      let objMySession = localStorage.getItem("obj")
      let myStorageToken = JSON.parse(objMySession)
      let token = myStorageToken.myToken;
      axios
        .get('https://212.227.142.69:3000/api/students/', {
          headers: {
            'Authorization': token
          }
        })
        .then(response => {
          this.items = response.data
          this.templateEmail = true
        })
        .catch(error => console.log(error()))
    },
    methods: {
      doSeen: function (id) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
      axios
        .get('https://212.227.142.69:3000/api/students/' + id + '/seen', {
          headers: {
            'Authorization': token
          }})
        .then(response => {
          this.student = response.data
          this.templateView = false
           axios
        .get('https://212.227.142.69:3000/api/piece/' + id + '/found', {
          headers: {
            'Authorization': token
        }})
        .then(response => {
          this.pieces = response.data
          console.log(this.pieces)
        })
        .catch(error => console.log(error()))
        })
        .catch(error => console.log(error()))
      },
    theMailer() {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;

        axios.post('https://212.227.142.69:3000/api/student/nodeMailer/', null, {
          headers: {
            'Authorization': token
          }
        })
          .then(response => {
            this.dataMailer = response.data
          })
          .catch(error => console.log(error()))

      },
        contactMailer(e) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;

        axios.post('https://212.227.142.69:3000/api/student/contactMailer/', this.posts, {
          headers: {
            'Authorization': token
          }
        })
          .then(response => {
            this.dataMailer = response.data
          })
          .catch(error => console.log(error()))
        e.preventDefault();

      },
         goMailer: function (id) {
          console.log('je suis un yankee')
          console.log(id)
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
        axios.post('https://212.227.142.69:3000/api/student/' + id +'/goMailer', this.posts, {
            headers: {
              'Authorization': token
             }
        })
            .then(response => {
                    this.dataMailer = response.data
                  })
            .catch(error => console.log(error()))
      },
      goStudent: function (id) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;
      axios
        .get('https://212.227.142.69:3000/api/students/' + id + '/seen', {
          headers: {
            'Authorization': token
          }
          }
          )
        .then(response => {
          this.student = response.data
          this.templateEmail = false
         })
        .catch(error => console.log(error()))
        }
      }
    }
</script>