import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../views/App.vue'
import NewMovieform from '../views/NewMovieFormView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'home',
        component: App
    },
    {
        path:'/Movies',
        name:'newMovie',
        component:NewMovieform
    }

]