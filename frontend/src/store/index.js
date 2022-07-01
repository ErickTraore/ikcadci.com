import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        titreFromVuex: "ma valeur",
        logged: true,
        role: false

    },
    plugins: [createPersistedState()],
    mutations: {
        NOW_LOGGED(state) {
            state.logged = false

        },
        BEFORE_LOGGED(state) {
            state.logged = true
        }

    },

    actions: {
        nowLogged(context) {
            context.commit("NOW_LOGGED")
        },
        beforeLogged(context) {
            context.commit("BEFORE_LOGGED")

        },

    },

    getters: {


    }
})