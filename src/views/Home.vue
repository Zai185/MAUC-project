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
                    <router-link :to="{ name: 'About' }" @click.native="scrollToTop" class="text-red-700 text-xl font-medium hover:underline"> See More
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
                <div class="w-full h-[200px] md:h-full border-b border-black flex items-center justify-center">Image</div>
                <div class="w-full md:h-full justify-between p-4 flex flex-col ">
                    <div>
                        <h3 class="text-2xl font-medium mb-4">{{ course.name }}</h3>
                        <ul class="list-disc pl-8">
                            <li v-for="(outline, ind) in course.courseOutline" :key="`outline_${ind}_of${index}`"
                                class="pb-2 capitalize">
                                {{ outline }}
                            </li>
                        </ul>
                    </div>
                    <button
                        class="self-end py-1 px-3 text-sm border border-red-500 text-right text-red-500 font-medium hover:text-white hover:bg-red-500 cursor-pointer transition ">
                        <router-link :to="{name: 'Course'}">{{ `See about ${course.name}` }}</router-link>
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
            class="block text-center bg-red-500 text-white capitalize font-medium py-2 hover:bg-red-700">See about our
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
    

    <!-- //! copyright -->
    <div class="w-full bg-red-900 text-white text-center py-1">@copyright 2023 - All rights preserved to Mauc Training Center</div>
</template>

<script setup>

import MiddleHeader from '../components/MiddleHeader.vue';
import Carousel from '../components/carousel/Carousel.vue';

const slides = [
    '../images/building.jpg',
    '../images/sketch-3.jpg',
    '../images/sketch-4.png',
]

const texts = [
    { heading: 'MAUC Training Center', subHeading: 'Find your passion with us', buttons: [{text: 'See Our Course' , to: {name: 'Course'}} ] },
    { heading: 'Heading two', subHeading: 'Something two' },
    { heading: 'Heading three', subHeading: 'Something three' },
]

const courses = [
    { name: 'AutoCAD Course', courseOutline: ['basic course', 'basic to advanced course', 'drafting course', 'M&E drafting course', 'Electrical Drafting Course'], span: 'flex-col md:flex-row col-span-6 lg:col-span-4 row-span-3 lg:row-span-4' },
    { name: 'Graphic Design', courseOutline: ['Logo Design', 'Billboard Design'], span: 'col-span-6 md:col-span-2 flex-col md:row-span-4 lg:row-span-4 ' },
    { name: 'Revit Course', courseOutline: ['Architecture', 'Structure', 'M&E'], span: 'flex-col md:flex-row col-span-6 md:col-span-4 lg:col-span-3 md:row-span-2 lg:row-span-3' },
    { name: 'Sketchup Course', courseOutline: ['basic course', 'intermediate course', 'advanced course'], span: 'flex-col md:flex-row col-span-6 md:col-span-4 lg:col-span-3 md:row-span-2 lg:row-span-3' },
]

const projects = [
    { name: 'Residential Building', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, odit!', outlines: ['outline one', 'outline two'] },
    { name: 'Landscape Project', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, odit!', outlines: ['outline one'] },
    { name: 'Public Building Project', about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, odit!', outlines: ['outline one', 'outline two'] },
]


</script>

<style lang="scss" scoped></style>