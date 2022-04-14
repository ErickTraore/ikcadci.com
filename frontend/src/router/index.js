import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,


    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/logout',
        name: 'Logout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "logout" */ '../views/Logout.vue')
    },
    {
        path: '/signup',
        name: 'Signup',

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "signup" */ '../views/Signup.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/Profile.vue')
    }, {
        path: '/updateUserProfile',
        name: 'UpdateUserProfile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "updateUserProfile" */ '../views/UpdateUserProfile.vue')
    },
    {
        path: '/compte',
        name: 'Compte',
        component: () =>
            import ( /* webpackChunkName: "compte.vue" */ '../views/Compte.vue')
    },
    {
        path: '/comptemessages',
        name: 'Comptemessages',
        component: () =>
            import ( /* webpackChunkName: "comptemessages" */ '../views/Comptemessages.vue')
    },
    {
        path: '*',
        name: 'NotFound',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "pageNotFound.vue'" */ '../views/PageNotFound.vue')
    },
    {
        path: '/homeformation',
        name: 'Homeformation',
        component: () =>
            import ( /* webpackChunkName: "homeformation.vue" */ '../views/Homeformation.vue')
    },
    {
        path: '/formation',
        name: 'Formation',
        component: () =>
            import ( /* webpackChunkName: "formation.vue'" */ '../views/Formation.vue')
    },
    {
        path: '/listFormations',
        name: 'ListFormations',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "listFormations.vue'" */ '../views/ListFormations.vue')
    },
    {
        path: '/infoseshw',
        name: 'Infoseshw',
        component: () =>
            import ( /* webpackChunkName: "infoseshw.vue" */ '../views/Infoseshw.vue')
    },
    {
        path: '/infoseshw-nsw',
        name: 'Infoseshw-nsw',
        component: () =>
            import ( /* webpackChunkName: "infoseshw-nsw.vue" */ '../views/Infoseshw-nsw.vue')
    },
    {
        path: '/info-maq-seshw',
        name: 'Info-maq-seshw',
        component: () =>
            import ( /* webpackChunkName: "info-maq-seshw.vue" */ '../views/Info-maq-seshw.vue')
    },
    {
        path: '/contact-assistance-technique',
        name: 'Contact-assistance-technique',
        component: () =>
            import ( /* webpackChunkName: "contact-assistance-technique.vue" */ '../views/Contact-assistance-technique.vue')
    },
    {
        path: '/formation-diplomante',
        name: 'Formation-diplomante',
        component: () =>
            import ( /* webpackChunkName: "formation-diplomante.vue" */ '../views/Formation-diplomante.vue')
    },
    {
        path: '/page-formation',
        name: 'Page-formation',
        component: () =>
            import ( /* webpackChunkName: "page-formation.vue" */ '../views/Page-formation.vue')
    }
]

const router = new VueRouter({
    routes
})



export default router