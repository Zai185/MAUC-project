<template>
    <Carousel :slides="slides" image-height="h-[440px]" :texts="texts"
        text-pos="text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

    <!-- //! about -->
    <div class="my-7 border-t border-gray-200">
        <MiddleHeader header="About us" subheader="about our training center" class="mb-12" />
        <div class="w-full px-8 sm:px-24 flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2 px-8 py-12 lg:py-8 bg-white shadow flex flex-col justify-around">
                <div class="text-center lg:text-left">
                    <h1 class="text-4xl sm:text-4xl font-bold lg:block mb-8">About Our Training Center</h1>
                    <p class="text-lg text-justify mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
                        quo asperiores
                        quos, obcaecati sequi dignissimos mollitia deleniti perferendis voluptates temporibus maxime,
                        maiores exercitationem ipsa.</p>
                </div>
                <div>
                    <router-link :to="{ name: 'About' }" class="text-red-700 text-xl font-medium hover:underline"> See More
                        About us
                        -></router-link>
                </div>
            </div>
            <img src="../images/building.jpg" alt="" class="w-full lg:w-1/2 h-[370px] object-cover">
        </div>
    </div>

    <!-- //! Course -->

    <div class="w-full px-4 md:px-8 xl:px-24 py-7 border border-gray-200">
        <MiddleHeader header="Courses" subheader="courses we offer" class="mb-12" />
        <div class="grid grid-cols-6 grid-rows-7 md:h-[800px] lg:h-[600px] gap-8">
            <div v-for="(course, index) in courses" :key="`course_${index}`"
                class="w-full flex bg-white shadow-lg rounded-lg overflow-hidden" :class="course.span">
                <div class="w-full h-[200px] md:h-full overflow-hidden relative">
                    <img :src="course.url" :alt="course.url"
                        class="w-full h-full object-contain p-4 bg-gradient-to-tr from-orange-400 to-yellow-200">
                    <p class="bg-gray-900 text-white absolute bottom-0 right-0 px-4 py-1 z-20">{{ course.name }}</p>
                </div>
                <div class="w-full md:h-full justify-between py-4 px-2 lg:p-4 flex flex-col ">
                    <div>
                        <h3 class="text-2xl font-medium mb-4 px-2">{{ course.name }} Course</h3>
                        <ul class="list-disc pl-8">
                            <li v-for="(outline, ind) in course.courseOutline" :key="`outline_${ind}_of${index}`"
                                class="pb-2 capitalize">
                                {{ outline }}
                            </li>
                        </ul>
                    </div>
                    <button
                        class="self-end py-1 px-3 text-sm border border-red-500 text-right text-red-500 font-medium hover:text-white hover:bg-red-500 cursor-pointer transition ">
                        <router-link :to="{ name: 'Course' }" :name="`main_course_${course.id}`" @click="scrollView">{{ `See
                            about ${course.name}` }}</router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- //! Service  -->
    <div class="px-4 lg:px-16 py-7">
        <MiddleHeader header="Services" subheader="services we provide" class="mb-12" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
            <div v-for="(project, index) in projects" :key="project.name"
                class="w-full mb-4 bg-white block col-span-1 rounded-md overflow-hidden shadow-lg"
                :class="[index === 0 ? 'md:flex lg:block gap-8 md:col-span-2 lg:col-span-1' : '']">
                <img src="../images/building.jpg" alt="" class="w-full h-[240px] object-cover mb-2">
                <div class="p-4">
                    <h1 class="text-xl font-bold mb-2 text-justify">{{ project.name }}</h1>
                    <p>{{ project.about }}</p>
                    <ul class="list-disc px-7">
                        <li class="text-md font-medium" v-for="outline in project.outlines">{{ outline }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <router-link :to="{ name: 'Service' }"
            class="block text-center bg-gray-800 text-white capitalize font-medium py-2 hover:bg-gray-700">See about our
            service and project history =></router-link>
    </div>

    <!-- //! Footer
    <div class="px-24 w-full bg-red-600">
        <div class="bg-red-500 p-8 text-gray-50">
            <div class="flex items-center gap-4">
                <img src="../images/mauc.png" class="w-12 h-12">
                <h3 class="text-3xl font-medium ">MAUC TRAINING CENTER</h3>
            </div>
            <div class="grid grid-cols-4">
                <div>
                    <h4 class="text-lg font-medium">See Our Company</h4>
                </div>
                <div>
                    <h4 class="text-lg font-medium">Contact Us</h4>
                </div>
            </div>
        </div>
    </div> -->

    <!-- //! location -->
    <div class="mb-4">
        <MiddleHeader header="Locations" subheader="places you can find us"/>
        <div class="flex items-center px-4 lg:px-8 xl:px-16 flex-wrap">
            <iframe v-if="locationPlace == 'Hledan'"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30551.615722316867!2d96.09189387431637!3d16.828738900000026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195ffe79c7c81%3A0xf24ca2c87fb023b2!2sMAUC%20Training%20Center!5e0!3m2!1sen!2smm!4v1683799330463!5m2!1sen!2smm"
                class="w-full xlg:w-1/4 h-[370px] order-3 xlg:order-1" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <iframe v-else
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.126436449532!2d96.1869829749224!3d16.869638883931945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed467f42fbd9%3A0xd2dad9871b852f06!2sMAUC%20Training%20Center%20(Tamwe)!5e0!3m2!1sen!2smm!4v1683826584094!5m2!1sen!2smm"
                class="w-full xlg:w-1/4 h-[370px] order-3 xlg:order-1" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <div
                class="w-full sm:w-2/3 xlg:w-1/2 h-[370px] bg-gray-800 text-white relative overflow-hidden order-2 sm:order-1 xlg:order-2">
                <div class="flex text-center text-lg font-medium border-b">
                    <button class="w-1/2 py-2 cursor-pointer border-r" @click="locationPlace = 'Hledan'"
                        :class="[locationPlace == 'Hledan' ? ' shadow-inner shadow-white' : '']">Hledan</button>
                    <button class="w-1/2 py-2 cursor-pointer" @click="locationPlace = 'North Dagon'"
                        :class="[locationPlace == 'North Dagon' ? 'shadow-inner shadow-white' : '']">North Dagon</button>
                </div>
                <div v-for="(location, index) in locations" :key="`location_${index}`" class=" p-8 absolute">
                    <transition name="slide-right">
                        <div v-show="locationPlace === location.name">
                            <h3 class="text-4xl font-bold mb-4">{{ location.name }}</h3>
                            <div v-for="(detail, ind) in location.details" :key="`location_detail_${ind}`"
                                class="flex gap-4 items-center mb-7">
                                <div class="w-8" v-html="detail.icon"></div>
                                <p>{{ detail.about }}</p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

            <img v-if="locationPlace == 'Hledan'" src="../images/location-hledan.jpg" alt=""
                class="w-full sm:w-1/3 xlg:w-1/4 h-[370px] object-cover order-1 sm:order-2 xlg:order-3">
            <img v-if="locationPlace == 'North Dagon'" src="../images/location-north-dagon.jpg" alt=""
                class="w-full sm:w-1/3 xlg:w-1/4 h-[370px] object-cover order-1 sm:order-2 xlg:order-3">
        </div>
    </div>
    <Copyright />


    <!-- //! copyright -->
</template>

<script setup>

import MiddleHeader from '../components/MiddleHeader.vue';
import Copyright from '../components/Copyright.vue';
import Carousel from '../components/carousel/Carousel.vue';
import { ref } from 'vue';

const slides = [
    '../images/building.jpg',
    '../images/sketch-3.jpg',
    '../images/sketch-4.png',
]

const texts = [
    { heading: 'MAUC Training Center', subHeading: 'Find your passion with us', buttons: [{ text: 'See About Us', to: { name: 'About' } }, { text: 'Contact Us', to: { name: 'About' } }] },
    { heading: 'Courses we are Offer', subHeading: 'We are training many student from basic to advance', buttons: [{ text: 'See Our Course', to: { name: 'Course' } }] },
    { heading: 'Make you dreams true with us', subHeading: 'Find your passion with us', buttons: [{ text: 'See Our Service', to: { name: 'Service' } }] },
]

const courses = [
    { id: 1, name: 'AutoCAD', courseOutline: ['basic course', 'basic to advanced course', 'drafting course', 'M&E drafting course', 'Electrical Drafting Course'], span: 'flex-col md:flex-row col-span-6 lg:col-span-4 row-span-3 lg:row-span-4', url: '../images/logos/autocad.png' },
    { id: 2, name: 'Graphic Design', courseOutline: ['Logo Design', 'Billboard Design'], span: 'col-span-6 md:col-span-2 flex-col md:row-span-4 lg:row-span-4', url: '../images/logos/graphic.png' },
    { id: 3, name: 'Revit', courseOutline: ['Architecture', 'Structure', 'M&E'], span: 'flex-col md:flex-row col-span-6 md:col-span-4 lg:col-span-3 md:row-span-2 lg:row-span-3', url: '../images/logos/revit.png' },
    { id: 4, name: 'Sketchup', courseOutline: ['basic course', 'intermediate course', 'advanced course'], span: 'flex-col md:flex-row col-span-6 md:col-span-4 lg:col-span-3 md:row-span-2 lg:row-span-3', url: '../images/logos/sketchup.png' },
]

const projects = [
    { name: 'Residential Building', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, odit!',outlines: ['outline one', 'outline two'] },
    { name: 'Landscape Project', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, odit!', outlines: ['outline one'] },
    { name: 'Public Building Project', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, odit!', outlines: ['outline one', 'outline two'] },
]

const locations = [
    {
        name: 'Hledan',
        details: [
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"           stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>`,
                about: 'No.29, 1st Floor, (1)ward, Insein Main Road, Kamaryut Township, Yangon.'
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>`,
                about: '09 4200 76 512, 09 960 458 641'
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>`,
                about: 'myanmarautocad.mauc@gmail.com'

            }
        ]
    },
    {
        name: 'North Dagon',
        details: [
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"           stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>`,
                about: 'No.1222, 2nd Floor, (35)ward, Pin Lone Main Road, North Dagon Township, Yangon'
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>`,
                about: '09 4200 76 512, 09 974 777 338'
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>`,
                about: 'mkhant189@gmail.com'

            }
        ]
    }
]

const locationPlace = ref('Hledan');


function scrollView(event) {
    const targetId = event.target.name
    setTimeout(() => {
        const el = document.getElementById(targetId)
        el.scrollIntoView(true)
    }, 40);
}

</script>

<style lang="scss" scoped>
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 1s ease;
}

.slide-right-enter-from {
    transform: translateX(-100%)
}

.slide-right-leave-to {
    transform: translateX(120%)
}</style>