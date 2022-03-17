(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["formation.vue'"],{2660:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._v("Enregistrez une formation "),i("form",{attrs:{method:"post",enctype:"multipart/form-data",name:"formation"},on:{submit:e.onPostData}},[i("label",{staticClass:"labelForm"},[e._v("Nouveau message avec image optionnelle")]),e._v(" "),i("br"),e._v(" "),i("br"),e.errors.length?i("p",[i("b",[e._v("Merci de corriger les erreurs suivantes : ")]),i("ul",e._l(e.errors,(function(t){return i("li",{key:t},[e._v(e._s(t))])})),0)]):e._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formation.titleFirst,expression:"formation.titleFirst"}],attrs:{id:"titleFirst",type:"text",name:"titleFirst",placeholder:"Titre principal"},domProps:{value:e.formation.titleFirst},on:{input:function(t){t.target.composing||e.$set(e.formation,"titleFirst",t.target.value)}}}),i("br"),e._v(" "),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formation.titleSecond,expression:"formation.titleSecond"}],attrs:{id:"titleSecond",type:"text",name:"titleSecond",placeholder:"Titre secondaire"},domProps:{value:e.formation.titleSecond},on:{input:function(t){t.target.composing||e.$set(e.formation,"titleSecond",t.target.value)}}}),i("br"),e._v(" "),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formation.niveau,expression:"formation.niveau"}],attrs:{id:"niveau",type:"text",name:"niveau",placeholder:"Niveau du diplome"},domProps:{value:e.formation.niveau},on:{input:function(t){t.target.composing||e.$set(e.formation,"niveau",t.target.value)}}}),i("br"),e._v(" "),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formation.duration,expression:"formation.duration"}],attrs:{id:"duration",type:"text",name:"duration",placeholder:"Durée de la formation"},domProps:{value:e.formation.duration},on:{input:function(t){t.target.composing||e.$set(e.formation,"duration",t.target.value)}}}),i("br"),e._v(" "),i("br"),i("label",{staticClass:"isActive"},[e._v("Formation en cours? ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formation.isActive,expression:"formation.isActive"}],attrs:{id:"isActive",type:"checkbox",name:"isActive",checked:""},domProps:{checked:Array.isArray(e.formation.isActive)?e._i(e.formation.isActive,null)>-1:e.formation.isActive},on:{change:function(t){var i=e.formation.isActive,a=t.target,o=!!a.checked;if(Array.isArray(i)){var r=null,n=e._i(i,r);a.checked?n<0&&e.$set(e.formation,"isActive",i.concat([r])):n>-1&&e.$set(e.formation,"isActive",i.slice(0,n).concat(i.slice(n+1)))}else e.$set(e.formation,"isActive",o)}}}),i("br"),e._v(" "),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formation.attachment,expression:"formation.attachment"}],attrs:{id:"attachment",type:"hidden",name:"attachment",placeholder:"attachment"},domProps:{value:e.formation.attachment},on:{input:function(t){t.target.composing||e.$set(e.formation,"attachment",t.target.value)}}}),i("br"),i("div",[e.image?i("div",[e.loadingImage?i("div",{staticClass:"progress"},[i("div",{staticClass:"value v-80 striped animate s-10"},[e._v("Chargement...")])]):i("div",[i("img",{attrs:{src:e.image}})]),i("button",{on:{click:e.removeImage}},[e._v("Remove image")])]):i("div",[i("h2",[e._v("Choisir une image")]),i("div",{attrs:{id:"list"}}),i("input",{attrs:{id:"file",type:"file",name:"attachment",alt:"example"},on:{change:e.onFileSelected}})])]),i("br"),i("br"),i("div"),i("button",{attrs:{type:"submit",value:"val"}},[e._v(" Envoyer ")]),i("br"),i("br")])])},o=[],r=i("2b0e"),n=i("bc3a"),s=i.n(n),l=i("130e"),m=i("4380");r["a"].use(m["a"]),r["a"].use(l["a"],s.a);var c={name:"Formation",created(){},data(){return{loadingTemplate:!0,loadingImage:!0,errors:[],loading:!1,idImage:"",testName:Boolean,file:Blob,formation:{attachment:"",titleFirst:"",titleSecond:"",niveau:"",duration:"",isActive:!0},selectedFile:null,formations:[],image:"",posts:{attachment:"",titleFirst:"",titleSecond:"",niveau:"",duration:"",isActive:""}}},props:{},methods:{onPostData(e){if(e.preventDefault(),console.log("Je suis un Yankee-1"),this.errors=[],this.formation.titleFirst?(this.formation.titleFirst.length>=30||this.formation.titleFirst.length<=3)&&this.errors.push("Votre titre principal doit comprendre entre 4 et 30 caractères."):this.errors.push("Veillez saisir le titre principal"),this.formation.titleSecond?(this.formation.titleSecond.length>=50||this.formation.titleSecond.length<=3)&&this.errors.push("Votre second titre doit comprendre entre 4 et 50 caractères."):this.errors.push("Veillez saisir le titre secondaire"),this.formation.niveau?this.formation.niveau.length<=1&&this.errors.push("Le niveau doit contenir plus d 1 caracteres."):this.errors.push("Veillez saisir le niveau de la formation"),this.formation.duration?this.formation.duration.length<=1&&this.errors.push("Votre durée de formation doit contenir plus d 1 caractere."):this.errors.push("Veillez saisir la durée de la formation"),!this.errors.length)return console.log("Vérification des inputs --\x3e OK"),this.post(this.formation);console.log(this.errors),console.log("Je suis un Yankee-2")},post:function(e){console.log("Je suis un Yankee-3");let t=localStorage.getItem("obj"),i=JSON.parse(t),a=i.myToken;console.log("votre token",a),this.axios.post("http://localhost:3000/api/formations/new/",e,{headers:{Authorization:a}}).then((function(e){e&&this.resetForm(),e.status(200).json(e)})).catch((function(e){e.statusCode=401}))},onFileSelected(e){this.selectedFile=e.target.files[0];var t=e.target.files||e.dataTransfer.files;t.length&&this.createImage(t[0])},createImage(e){var t=new FileReader,i=this;t.onload=e=>{i.image=e.target.result},t.readAsDataURL(e),this.image||this.pushImage()},pushImage(){let e=localStorage.getItem("obj"),t=JSON.parse(e),i=t.myToken;var a=new FormData,o=document.querySelector("#file");console.log("Mon imageFile[0] :",o.files[0]),a.append("file",o.files[0]),setTimeout(()=>{s.a.post("http://localhost:3000/api/formations/upload",a,{headers:{Authorization:i,"Content-Type":"multipart/form-data"}}).then(e=>(console.log("valeure reçu par le back:",e.data),console.log("valeure res.data.idImage:",e.data.idImage),e.data.idImage)).then((function(e){const t=document.querySelector("#attachment");t.value="http://localhost:3000/formations/images/"+e,t.dispatchEvent(new Event("input")),status(200).json({idImage:e})})).catch((function(e){e.statusCode=401})).finally(()=>this.loadingImage=!1)},1e3)},removeImage:function(e){let t=localStorage.getItem("obj"),i=JSON.parse(t),a=i.myToken;var o=this.selectedFile.name;console.log("Envoie dufichier pour écrasement",o);var r=new FormData;r.append("file",this.selectedFile),s.a.post("http://localhost:3000/api/formations/delLienImage",r,{headers:{Authorization:a,"Content-Type":"multipart/form-data"}}),this.image="",console.log("Le fichier vient d'être effacé du navigateur"),this.formation.attachment="",console.log("L'url du fichier vient d'être effacé du formulaire"),e.preventDefault()}}},u=c,d=i("2877"),v=Object(d["a"])(u,a,o,!1,null,"5002abbe",null);t["default"]=v.exports}}]);
//# sourceMappingURL=formation.vue'.f828beef.js.map