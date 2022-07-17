<template>
    <div id="notif_ctn">
        {{ getNotif }}
        <span id="notif_close" @click="close">X</span>
        <p id="notif_text">Le message</p>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import { mapGetters } from 'vuex'
 export default {
    name: 'NotifBarComponent',
    computed:{
    ...mapGetters(['getNotif']),
    },
 }
</script>
<style lang="scss">

</style>