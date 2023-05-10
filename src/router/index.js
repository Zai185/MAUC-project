import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Course from '../views/Course.vue'
import Service from '../views/Service.vue'
import Navbar from '../components/Navbar.vue'

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
                path: '/course',
                name: 'Course',
                component: Course,
            },
            {
                path: '/service',
                name: 'Service',
                component: Service,
            },
        ]
    }
]

function scrollToTop() {
    window.scrollTo(0, 0);
}

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router