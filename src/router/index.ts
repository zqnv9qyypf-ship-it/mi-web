import Home from "@/pages/home/Home.vue";
import About from "@/pages/about/About.vue";
import Contact from "@/pages/contact/Contact.vue";
import Projects from "@/pages/projects/Projects.vue";
import ProjectsLayout from "@/pages/projects/ProjectsLayout.vue";
import Project1 from "@/pages/projects/Project1.vue";
import Project2 from "@/pages/projects/Project2.vue";
import Project3 from "@/pages/projects/Project3.vue";
import Project4 from "@/pages/projects/Project4.vue";
import Project5 from "@/pages/projects/Project5.vue";
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
      path: '/proyectos',
      component: ProjectsLayout,
      children: [
        {
          path: '',
          name: 'projects',
          component: Projects
        },
        {
          path: '1',
          name: 'project-1',
          component: Project1
        },
        {
          path: '2',
          name: 'project-2',
          component: Project2
        },
        {
          path: '3',
          name: 'project-3',
          component: Project3
        },
        {
          path: '4',
          name: 'project-4',
          component: Project4
        },
        {
          path: '5',
          name: 'project-5',
          component: Project5
        }
      ]
    },
    {
      path: '/proyecto-1',
      redirect: '/proyectos/1'
    },
    {
      path: '/proyecto-2',
      redirect: '/proyectos/2'
    },
    {
      path: '/proyecto-3',
      redirect: '/proyectos/3'
    },
    {
      path: '/proyecto-4',
      redirect: '/proyectos/4'
    },
    {
      path: '/proyecto-5',
      redirect: '/proyectos/5'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
