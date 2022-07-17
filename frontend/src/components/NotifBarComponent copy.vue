<template>
       <div>
        <div
        id="notif_ctn"
        v-if="getNotif"
        >
            <span
            id="notif_close"
            @click="close"
            >
            X
            </span>
            <p
                id="notif_text"
                >
                Le message
            </p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { mapGetters, mapMutations } from 'vuex'
 export default {
    name: 'NotifBarComponent',
    computed:{
        ...mapGetters(['getNotif'])
    },
    methods: {
        ...mapMutations(['DISPLAYNOTIF']),
    close(){
        this.DISPLAYNOTIF(false)
    }
    },
 }
</script>
<style>

</style>