<template>
        <div v-if="byPass">
            Votre adresse email est déjà utilisée!
        </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import VueAxios from "vue-axios"
import axios from "axios";
Vue.use(VueAxios, axios)

 export default {
    name: 'NotifMailComponent',
    data() {
    return {
    }
    },
    computed: {

  },
 }
</script>
<style scoped>
.mail {
    color: red;
    background-color: white;
}
</style>