import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)


const routes = [{
        path: '/',
        name: 'Login',
        component: Login,
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
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/Home.vue')
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
        path: '/home-formation',
        name: 'Home-formation',
        component: () =>
            import ( /* webpackChunkName: "home-formation.vue" */ '../views/Home-formation.vue')
    },
    {
        path: '/home-inscription',
        name: 'Home-inscription',
        component: () =>
            import ( /* webpackChunkName: "home-inscription.vue" */ '../views/Home-inscription.vue')
    },
    {
        path: '/page-conditionsInscription',
        name: 'Page-conditionsInscription',
        component: () =>
            import ( /* webpackChunkName: "page-conditionsInscription.vue" */ '../views/Page-conditionsInscription.vue')
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
    // {
    //     path: '/formation-diplomante',
    //     name: 'Formation-diplomante',
    //     component: () =>
    //         import ( /* webpackChunkName: "formation-diplomante.vue" */ '../views/Formation-diplomante.vue')
    // },
    {
        path: '/page-formation-certifiante',
        name: 'Page-formation-certifiante',
        component: () =>
            import ( /* webpackChunkName: "page-formation-certifiante.vue" */ '../views/Page-formation-certifiante.vue')

    },
    {
        path: '/page-formation-diplomante',
        name: 'Page-formation-diplomante',
        component: () =>
            import ( /* webpackChunkName: "page-formation-diplomante.vue" */ '../views/Page-formation-diplomante.vue')

    },
    {
        path: '/page-inscription-certifiante',
        name: 'Page-inscription-certifiante',
        component: () =>
            import ( /* webpackChunkName: "page-inscription-certifiante.vue" */ '../views/Page-inscription-certifiante.vue')

    },
    {
        path: '/page-inscription-diplomante',
        name: 'Page-inscription-diplomante',
        component: () =>
            import ( /* webpackChunkName: "page-inscription-diplomante.vue" */ '../views/Page-inscription-diplomante.vue')

    },
    // {
    //     path: '/StepperInscriptionForm',
    //     name: 'StepperInscriptionForm',
    //     component: () =>
    //         import ( /* webpackChunkName: "StepperInscriptionFormulair.vue" */ '../views/StepperInscriptionFormul.vue ')
    // },
    {
        path: '/pageInscriptionCertifiante',
        name: 'PageInscriptionCertifiante',
        component: () =>
            import ( /* webpackChunkName: "pageInscriptionCertifiante.vue" */ '../views/PageInscriptionCertifiante.vue')
    },
    {
        path: '/pageAdmin',
        name: 'PageAdmin',
        component: () =>
            import ( /* webpackChunkName: "pageAdmin.vue" */ '../views/PageAdmin.vue')
    },
    {
        path: '/page-formation-libre',
        name: 'Page-formation-libre',
        component: () =>
            import ( /* webpackChunkName: "page-formation-libre.vue" */ '../views/Page-formation-libre.vue')
    },
    {
        path: '/maClass',
        name: 'MaClass',
        component: () =>
            import ( /* webpackChunkName: "maClass" */ '../views/MaClass')
    },
    {
        path: '/Admin/compte',
        name: '/Admin/compte',
        component: () =>
            import ( /* webpackChunkName: "/Admin/compte.vue" */ '../views/Admin/Compte.vue')
    },
    {
        path: '/Admin/comptemessages',
        name: '/Admin/comptemessages',
        component: () =>
            import ( /* webpackChunkName: "/Admin/comptemessages.vue" */ '../views/Admin/Comptemessages.vue')
    },
    {
        path: '/Admin/compteInscriptions',
        name: '/Admin/compteInscriptions',
        component: () =>
            import ( /* webpackChunkName: "/Admin/compteInscriptions.vue" */ '../views/Admin/CompteInscriptions.vue')
    },
    {
        path: '/Admin/formation',
        name: '/Admin/formation',
        component: () =>
            import ( /* webpackChunkName: "/Admin/formation.vue'" */ '../views/Admin/Formation.vue')
    },
    {
        path: '/pages/seshsw-nsw-s1',
        name: 'Pages/seshsw-nsw-s1',
        component: () =>
            import ( /* webpackChunkName: "pages/seshsw-nsw-s1.vue" */ '../views/Pages/seshsw-nsw-s1.vue')
    },
    {
        path: '/pages/seshsw-nsw-s2',
        name: 'Pages/seshsw-nsw-s2',
        component: () =>
            import ( /* webpackChunkName: "pages/seshsw-nsw-s2.vue" */ '../views/Pages/seshsw-nsw-s2.vue')
    },
    {
        path: '/pages/seshsw-nsw-s3',
        name: 'Pages/seshsw-nsw-s3',
        component: () =>
            import ( /* webpackChunkName: "pages/seshsw-nsw-s3.vue" */ '../views/Pages/seshsw-nsw-s3.vue')
    },
    {
        path: '/pages/seshsw-nsw-s4',
        name: 'Pages/seshsw-nsw-s4',
        component: () =>
            import ( /* webpackChunkName: "pages/seshsw-nsw-s4.vue" */ '../views/Pages/seshsw-nsw-s4.vue')
    },
    {
        path: '/pages/seshsw-s1',
        name: 'Pages/seshsw-s1',
        component: () =>
            import ( /* webpackChunkName: "Pages/seshsw-s1.vue" */ '../views/Pages/seshsw-s1.vue')
    },
    {
        path: '/pages/seshsw-s2',
        name: 'Pages/seshsw-s2',
        component: () =>
            import ( /* webpackChunkName: "Pages/seshsw-s2.vue" */ '../views/Pages/seshsw-s2.vue')
    },
    {
        path: '/pages/seshsw-s3',
        name: 'Pages/seshsw-s3',
        component: () =>
            import ( /* webpackChunkName: "Pages/seshsw-s3.vue" */ '../views/Pages/seshsw-s3.vue')
    },
    {
        path: '/pages/seshsw-s4',
        name: 'Pages/seshsw-s4',
        component: () =>
            import ( /* webpackChunkName: "Pages/seshsw-s4.vue" */ '../views/Pages/seshsw-s4.vue')
    },
    {
        path: '/admin/signupInscription',
        name: '/Admin/SignupInscription',
        component: () =>
            import ( /* webpackChunkName: "admin/signupInscription.vue" */ '../views/Admin/SignupInscription.vue')
    },
    {
        path: '/stepper',
        name: 'Stepper',
        component: () =>
            import ( /* webpackChunkName: "stepper" */ '../views/Stepper')
    },
    {
        path: '/info',
        name: 'Info',
        component: () =>
            import ( /* webpackChunkName: "info" */ '../views/Info')
    },
    {
        path: '/infomodif',
        name: 'Infomodif',
        component: () =>
            import ( /* webpackChunkName: "infomodif" */ '../views/Infomodif')
    },
    {
        path: '/page-profil',
        name: 'Page-profil',
        component: () =>
            import ( /* webpackChunkName: "page-profil" */ '../views/Page-profil')
    },
    {
        path: '/stepperInscriptionDiplomante',
        name: 'StepperInscriptionDiplomante',
        component: () =>
            import ( /* webpackChunkName: "stepperInscriptionDiplomante.vue" */ '../views/StepperInscriptionDiplomante.vue')
    },
    {
        path: '/stepperInscriptionFormulaire',
        name: 'StepperInscriptionFormulaire',
        component: () =>
            import ( /* webpackChunkName: "stepperInscriptionFormulaire.vue" */ '../views/StepperInscriptionFormulaire.vue')
    },
    {
        path: '/stepperInscriptionCertifiante',
        name: 'StepperInscriptionCertifiante',
        component: () =>
            import ( /* webpackChunkName: "stepperInscriptionCertifiante.vue" */ '../views/StepperInscriptionCertifiante.vue')
    },
    {
        path: '/connected',
        name: 'Connected',
        component: () =>
            import ( /* webpackChunkName: "connected" */ '../views/Connected')
    },
    {
        path: '/pieceIdentite',
        name: 'PieceIdentite',
        component: () =>
            import ( /* webpackChunkName: "pieceIdentite.vue" */ '../views/PieceIdentite.vue')
    },
    {
        path: '/piecePhoto',
        name: 'PiecePhoto',
        component: () =>
            import ( /* webpackChunkName: "piecePhoto.vue" */ '../views/PiecePhoto.vue')
    },
    {
        path: '/pieceMotivation',
        name: 'PieceMotivation',
        component: () =>
            import ( /* webpackChunkName: "pieceMotivation.vue" */ '../views/PieceMotivation.vue')
    },
    {
        path: '/pieceAdresse',
        name: 'PieceAdresse',
        component: () =>
            import ( /* webpackChunkName: "pieceAdresse.vue" */ '../views/PieceAdresse.vue')
    },
    {
        path: '/pieceDiplome',
        name: 'PieceDiplome',
        component: () =>
            import ( /* webpackChunkName: "pieceDiplome.vue" */ '../views/PieceDiplome.vue')
    },
    {
        path: '/piece',
        name: 'Piece',
        component: () =>
            import ( /* webpackChunkName: "piece.vue" */ '../views/Piece.vue')
    },
    {
        path: '/seba',
        name: 'Seba',
        component: () =>
            import ( /* webpackChunkName: "seba.vue" */ '../views/Seba.vue')
    },
    {
        path: '/page-formation-seba',
        name: 'Page-formation-seba',
        component: () =>
            import ( /* webpackChunkName: "page-formation-seba.vue" */ '../views/Page-formation-seba.vue')
    },
    {
        path: '/page-formation-seshw',
        name: 'Page-formation-seshw',
        component: () =>
            import ( /* webpackChunkName: "page-formation-seshw.vue" */ '../views/Page-formation-seshw.vue')
    },
    {
        path: '/page-formation-seshw2',
        name: 'Page-formation-seshw2',
        component: () =>
            import ( /* webpackChunkName: "page-formation-seshw2.vue" */ '../views/Page-formation-seshw2.vue')
    },
    {
        path: '/engagement',
        name: 'Engagement',
        component: () =>
            import ( /* webpackChunkName: "engagement.vue" */ '../views/Engagement.vue')
    },
    {
        path: '/seshw',
        name: 'Seshw',
        component: () =>
            import ( /* webpackChunkName: "seshw.vue" */ '../views/Seshw.vue')
    },
    {
        path: '/piecemix',
        name: 'Piecemix',
        component: () =>
            import ( /* webpackChunkName: "piecemix.vue" */ '../views/Piecemix')
    },
    {
        path: '/formulaire',
        name: 'Formulaire',
        component: () =>
            import ( /* webpackChunkName: "formulaire.vue" */ '../views/Formulaire')
    },
    {
        path: '/page-formation-gle',
        name: 'Page-formation-gle',
        component: () =>
            import ( /* webpackChunkName: "page-formation-gle.vue" */ '../views/Page-formation-gle.vue')
    },
    {
        path: '/admin/listeBeforeStudents',
        name: 'Admin/ListeBeforeStudents',
        component: () =>
            import ( /* webpackChunkName: "admin/listeBeforeStudents.vue" */ '../views/Admin/ListeBeforeStudents.vue')
    },
    {
        path: '/admin/consulte',
        name: 'Admin/Consulte',
        component: () =>
            import ( /* webpackChunkName: "admin/consulte.vue" */ '../views/Admin/Consulte.vue')
    },
    {
        path: '/admin/pageConforme/:userId',
        name: 'Admin/PageConforme/:userId',
        component: () =>
            import ( /* webpackChunkName: "admin/pageConforme/:userId.vue" */ '../views/Admin/PageConforme.vue')
    },
    {
        path: '/admin/pageConforme',
        name: 'Admin/PageConforme',
        component: () =>
            import ( /* webpackChunkName: "admin/pageConforme.vue" */ '../views/Admin/PageConforme.vue')
    },
    {
        path: '/admin/pageEmailConforme',
        name: 'Admin/PageEmailConforme',
        component: () =>
            import ( /* webpackChunkName: "admin/pageEmailConforme.vue" */ '../views/Admin/PageEmailConforme.vue')
    },
    {
        path: '/accueil',
        name: 'Accueil',
        component: () =>
            import ( /* webpackChunkName: "accueil.vue" */ '../views/Accueil.vue')
    },
    {
        path: '/forgetPassword',
        name: 'ForgetPassword',
        component: () =>
            import ( /* webpackChunkName: "forgetPassword.vue" */ '../views/ForgetPassword.vue')
    },
    {
        path: '/createPass',
        name: 'CreatePass',
        component: () =>
            import ( /* webpackChunkName: "createPass.vue" */ '../views/CreatePass.vue')
    }

]


const router = new VueRouter({
    // mode: 'history',
    routes
});



export default router