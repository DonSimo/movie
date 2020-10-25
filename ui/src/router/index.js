import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from "@/views/Films";
import People from "@/views/People";
import FilmDetail from "@/views/FilmDetail";
import Home from "@/views/Home";
import CharacterDetail from "@/views/CharacterDetail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/films',
    children: [
        {
            path: 'films',
            name: 'Films',
            component: Films
        },
         {
            path: 'films/:id',
            name: 'Film',
            component: FilmDetail
        },
        {
            path: 'people',
            name: 'People',
            component: People
        },
        {
            path: 'people/:id',
            name: 'Character',
            component: CharacterDetail
        }

    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
