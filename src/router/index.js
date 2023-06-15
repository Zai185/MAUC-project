import { createRouter, createWebHistory } from 'vue-router'
import CourseView from '../views/CourseView.vue'


const routes = [
    {
        path: '/',
        redirect: '/home',
        component: ()=>import('../components/NavBar.vue'),
        children: [

            {
                path: '/home',
                name: 'Home',
                component: ()=> import('../views/Home.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: ()=> import('../views/About.vue') ,
            },
            {
                path: '/courses',
                name: 'Courses',
                component: ()=> import('../views/Courses.vue') ,
            },
            {
                path: '/services',
                name: 'Services',
                component: ()=> import('../views/Services.vue') ,
                
            },
            {
                path: '/contact',
                name: 'Contact',
                component: ()=> import('../views/Contact.vue') ,
            },
        ]
    },
    {
        path: '/courses/:slug',
        name: 'CourseView',
        component: CourseView
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})
    
export default router