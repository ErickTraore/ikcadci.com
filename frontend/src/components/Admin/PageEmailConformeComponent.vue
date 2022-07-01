<template>
    <div>
        <h1>Hello welcome to our blog!</h1>
    
        <p>
            Hello today we shall learn about
            replace() function in JavaScript
            Click on the button below to replace
            hello with hi.
        </p>
    
        <button @click="rep">Replace</button>
    </div>
</template>

<script>
 import Vue from "vue";
  import VueAxios from "vue-axios";
  import axios from "axios";

  Vue.use(VueAxios, axios)
export default{
    name: "PageEmailConformeComponent",
    data() {
          return{}
},

methods: {

         rep: function () {
            document.body.innerHTML
                = document.body.innerHTML
                .replace("Hello", "Hi");
            
        }
}
}
</script>