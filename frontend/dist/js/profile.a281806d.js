(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{c66d:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"thing"},[s("div",{attrs:{id:"app"}},[s("div",[e._v("class='thing__header'> "),s("div",{staticClass:"thing__header__body__maj"},[s("div",{staticClass:"thing__header__body__title"},[e._v(" Mon profil")]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("Nom:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(e._s(e.profile.username)+" ")])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("Prenom:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.lastname))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("Email: ")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.email))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("Nom Tradition:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.usernameTradition))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("Prenom Tradition:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.lastnameTradition))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("Date Naissance:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.dateBirthday))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("Ville Naissance:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.townBirthday))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("sexe:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.sexe))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("nationalite:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.nationalite))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("adresseResid:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.adresseResid))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("villeResid:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.villeResid))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("paysResid:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.paysResid))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("tel1:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.tel1))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("tel2:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.tel2))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("tel3:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.tel3))])]),s("div",{staticClass:"thing__header__body__content"},[e._m(0),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.profession))])]),s("div",{staticClass:"thing__header__body__content"},[s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("Activite:")]),s("div",{staticClass:"thing__header__body__content__saveTwo"},[e._v(" "+e._s(e.profile.activite))])])]),s("form",{attrs:{method:"post"},on:{submit:e.postData}},[s("div",{staticClass:"thing__header__body__maj--background"},[s("div",{staticClass:"thing__header__body__maj__title"},[e._v(" Mise à jour de Mon profil ")]),s("div",{staticClass:"thing__header__body"},[e._m(1),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.lastname,expression:"posts.lastname"}],attrs:{id:"lastname",name:"lastname",placeholder:"Prenom",type:"text"},domProps:{value:e.posts.lastname},on:{input:function(t){t.target.composing||e.$set(e.posts,"lastname",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Nom Traditionel")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.usernameTradition,expression:"posts.usernameTradition"}],attrs:{id:"usernameTradition",name:"usernameTradition",placeholder:"Nom-traditionel",type:"text"},domProps:{value:e.posts.usernameTradition},on:{input:function(t){t.target.composing||e.$set(e.posts,"usernameTradition",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Prénom-traditionel")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.lastnameTradition,expression:"posts.lastnameTradition"}],attrs:{id:"lastnameTradition",name:"lastnameTradition",placeholder:"Prenom-traditionel",type:"text"},domProps:{value:e.posts.lastnameTradition},on:{input:function(t){t.target.composing||e.$set(e.posts,"lastnameTradition",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Date de naissance")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.dateBirthday,expression:"posts.dateBirthday"}],attrs:{id:"dateBirthday",name:"dateBirthday",placeholder:"jour/mois/année",type:"text"},domProps:{value:e.posts.dateBirthday},on:{input:function(t){t.target.composing||e.$set(e.posts,"dateBirthday",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Ville de naissance")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.townBirthday,expression:"posts.townBirthday"}],attrs:{id:"townBirthday",name:"townBirthday",placeholder:"Ville de naissance",type:"text"},domProps:{value:e.posts.townBirthday},on:{input:function(t){t.target.composing||e.$set(e.posts,"townBirthday",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Civilité")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.posts.sexe,expression:"posts.sexe"}],attrs:{type:"radio",id:"homme",value:"homme"},domProps:{checked:e._q(e.posts.sexe,"homme")},on:{change:function(t){return e.$set(e.posts,"sexe","homme")}}}),s("label",{attrs:{for:"homme"}},[e._v("homme")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.posts.sexe,expression:"posts.sexe"}],attrs:{type:"radio",id:"femme",value:"femme"},domProps:{checked:e._q(e.posts.sexe,"femme")},on:{change:function(t){return e.$set(e.posts,"sexe","femme")}}}),s("label",{attrs:{for:"femme"}},[e._v("femme")]),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Nationalité")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.nationalite,expression:"posts.nationalite"}],attrs:{id:"nationalite",name:"nationalite",placeholder:"Nationalité",type:"text"},domProps:{value:e.posts.nationalite},on:{input:function(t){t.target.composing||e.$set(e.posts,"nationalite",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Adresse postale de résidence")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.adresseResid,expression:"posts.adresseResid"}],attrs:{id:"adresseResid",name:"adresseResid",placeholder:"Adresse postale",type:"text"},domProps:{value:e.posts.adresseResid},on:{input:function(t){t.target.composing||e.$set(e.posts,"adresseResid",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Ville de résidence")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.villeResid,expression:"posts.villeResid"}],attrs:{id:"villeResid",name:"villeResid",placeholder:"Ville de résidence",type:"text"},domProps:{value:e.posts.villeResid},on:{input:function(t){t.target.composing||e.$set(e.posts,"villeResid",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Pays de résidence")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.paysResid,expression:"posts.paysResid"}],attrs:{id:"paysResid",name:"paysResid",placeholder:"Pays de Résidence",type:"text"},domProps:{value:e.posts.paysResid},on:{input:function(t){t.target.composing||e.$set(e.posts,"paysResid",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Telephone")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.tel1,expression:"posts.tel1"}],attrs:{id:"tel1",name:"tel1",placeholder:"tel-1",type:"text"},domProps:{value:e.posts.tel1},on:{input:function(t){t.target.composing||e.$set(e.posts,"tel1",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[e._m(2),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.tel2,expression:"posts.tel2"}],attrs:{id:"tel2",name:"tel2",placeholder:"tel-2",type:"text"},domProps:{value:e.posts.tel2},on:{input:function(t){t.target.composing||e.$set(e.posts,"tel2",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Inserez un 3eme N°(facultatif)")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.tel3,expression:"posts.tel3"}],attrs:{id:"tel3",name:"tel3",placeholder:"tel-3",type:"text"},domProps:{value:e.posts.tel3},on:{input:function(t){t.target.composing||e.$set(e.posts,"tel3",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Profession)")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.profession,expression:"posts.profession"}],attrs:{id:"profession",name:"profession",placeholder:"profession",type:"text"},domProps:{value:e.posts.profession},on:{input:function(t){t.target.composing||e.$set(e.posts,"profession",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])]),s("div",{staticClass:"thing__header__body"},[s("label",[e._v("Activite")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.posts.activite,expression:"posts.activite"}],attrs:{id:"activite",name:"activite",placeholder:"activite",type:"text"},domProps:{value:e.posts.activite},on:{input:function(t){t.target.composing||e.$set(e.posts,"activite",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Soumettre")])])])])])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"thing__header__body__content__saveOne"},[e._v("Profession"),s("sup",[e._v("*")]),e._v(":")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",[e._v("Mettre à jour mon"),s("span",[e._v(" prénom")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",[e._v("Inserez "),s("span",[e._v(" N° de tel wats'app")])])}],o=s("bc3a"),_=s.n(o),n={data:function(){return{myStr:"",message:"Je suis un yankee",checkedFormations:[],profile:"",posts:{username:"",email:"",biographie:"",lastname:"",usernameTradition:"",lastnameTradition:"",dateBirthday:"",townBirthday:"",sexe:"",nationalite:"",adresseResid:"",villeResid:"",paysResid:"",tel1:"",tel2:"",tel3:"",picked:"",seshsw:"",seba:"",profession:"",activite:""}}},created(){let e=localStorage.getItem("obj"),t=JSON.parse(e),s=t.myToken;_.a.get("https://212.227.142.69:3000/api/users/me/",{headers:{Authorization:s}}).then(e=>{this.profile=e.data,this.testUser=this.profile.testUser,console.log("Je suis dans le frontend me ou getUserProfile-1"),console.log(this.profile),console.log(this.testUser),"testOk"==this.testUser&&this.$store.dispatch("beforeLogged")}).catch(e=>console.log(e()))},methods:{myFunction:function(){this.posts.seba=JSON.stringify(this.checkedFormations)},postData(e){let t=localStorage.getItem("obj"),s=JSON.parse(t),a=s.myToken;this.axios.put("https://212.227.142.69:3000/api/users/me/",this.posts,{headers:{Authorization:a}}).then(e=>{this.profile.biographie=e.data.biographie,this.profile.lastname=e.data.lastname,this.profile.usernameTradition=e.data.usernameTradition,this.profile.lastnameTradition=e.data.lastnameTradition,this.profile.dateBirthday=e.data.dateBirthday,this.profile.townBirthday=e.data.townBirthday,this.profile.sexe=e.data.sexe,this.profile.nationalite=e.data.nationalite,this.profile.adresseResid=e.data.adresseResid,this.profile.villeResid=e.data.villeResid,this.profile.paysResid=e.data.paysResid,this.profile.tel1=e.data.tel1,this.profile.tel2=e.data.tel2,this.profile.tel3=e.data.tel3,this.profile.picked=e.data.picked,this.profile.seshsw=e.data.seshsw,this.profile.seba=e.data.seba,this.profile.profession=e.data.profession,this.profile.activite=e.data.activite}).catch(e=>console.log(e())),e.preventDefault()},delProfil(){let e=localStorage.getItem("obj"),t=JSON.parse(e),s=t.myToken;this.axios.post("https://212.227.142.69:3000/api/users/delProfil",null,{headers:{Authorization:s}}).then(e=>{this.profile=e.data}).catch(e=>console.log(e()))}}},d=n,r=s("2877"),l=Object(r["a"])(d,a,i,!1,null,"6cc1f29c",null);t["default"]=l.exports}}]);
//# sourceMappingURL=profile.a281806d.js.map