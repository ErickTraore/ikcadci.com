import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        titreFromVuex: "ma valeur",
        logged: true,
        pass: true,
        role: false,
        notifDisplay: true


    },
    plugins: [createPersistedState()],
    mutations: {
        NOW_LOGGED(state) {
            state.logged = false

        },
        BEFORE_LOGGED(state) {
            state.logged = true
        },
        AFTER_PASS(state) {
            state.pass = true

        },
        BEFORE_PASS(state) {
            state.pass = false
        }

    },

    actions: {
        nowLogged(context) {
            context.commit("NOW_LOGGED")
        },
        beforeLogged(context) {
            context.commit("BEFORE_LOGGED")

        },
        afterPass(context) {
            context.commit("AFTER_PASS")
        },
        beforePass(context) {
            context.commit("BEFORE_PASS")

        },

    },

    getters: {
        getNotif: (state) => {
            return state.notifDisplay
        }

    },
})