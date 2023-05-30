import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Courses from '../views/Courses.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Navbar from '../components/Navbar.vue'
import store from '../store'

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: Navbar,
        children: [

            {
                path: '/home',
                name: 'Home',
                component: Home,
            },
            {
                path: '/about',
                name: 'About',
                component: About,
            },
            {
                path: '/courses',
                name: 'Courses',
                component: Courses,
            },
            {
                path: '/services',
                name: 'Services',
                component: Services,
            },
            {
                path: '/contact',
                name: 'Contact',
                component: Contact,
            },
        ]
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})
    
export default router