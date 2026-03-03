import Home from "@/pages/home/Home.vue";
import About from "@/pages/about/About.vue";
import Contact from "@/pages/contact/Contact.vue";
import Projects from "@/pages/projects/Projects.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/proyectos',
      name: 'projects',
      component: Projects
    },
    {
      path: '/sobre-mi',
      name: 'about',
      component: About
    },
    {
      path: '/contacto',
      name: 'contact',
      component: Contact
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
