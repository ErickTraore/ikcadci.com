<template>
    <div class='thing'>
        <div id="app" class='thing__header'>
            <div class='thing__header__body__maj'>
                <!-- <div class='thing__header__body'> -->
                    <div class='thing__header__body__title'> Mon profil</div>
                <!-- </div> -->
                <div class='thing__header__body__content'>
                    <div class='thing__header__body__content__saveOne'>Nom:</div>
                    <div class='thing__header__body__content__saveTwo' v-show="posts.username">
                    {{ profile.username }}
                    </div>
                </div>
                <div class='thing__header__body__content'>
                    <div class='thing__header__body__content__saveOne'>Prenom:</div>
                    <div class='thing__header__body__content__saveTwo' v-show='posts.lastname'> {{ profile.lastname }}</div>
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
                 <div class='thing__header__body__content'>
                <div class='thing__header__body__content__saveOne'>Profession<sup>*</sup>:</div>
                <div class='thing__header__body__content__saveTwo'> {{ profile.profession }}</div>
                </div>
                <div class='thing__header__body__content'>
                    <div class='thing__header__body__content__saveOne'>Activite:</div>
                    <div class='thing__header__body__content__saveTwo'> {{ profile.activite }}</div>
                </div>
            </div>

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
              </div>
          </form>
        </div>
             </div>

</template>

<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
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
