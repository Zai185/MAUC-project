<template>
    <div>
        <!-- //! carousel -->
        <div class="w-full relative">
            <div class="w-full h-full absolute top-0 left-0 bg-black opacity-70 z-30"></div>
            <div class="flex flex-col items-center justify-center w-full h-full absolute z-40">
                <div class="text-white text-center">
                    <h3 class="text-4xl font-medium mb-2">See Our Course Here</h3>
                    <p class="text-md">We have been providing <br>AutoCAD, Revit, SketchUp and Graphic Design!</p>
                </div>
                <div
                    class="text-white text-center absolute bottom-4 left-1/2 -translate-x-1/2 animate-pulse cursor-pointer">
                    <a href="#main_courses">
                        <p class="text-lg">scroll down to continue</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 inline ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

                </div>
            </div>
            <img src="../images/building.jpg" alt="" class="w-full h-[360px]">
        </div>

        <div class="px-4 xl:px-20" id="main_courses">
            <MiddleHeader header="Courses" class="my-7" />
            <div v-for="(mainCourse, index) in mainCourses" :key="`main_course_${index}`" class="w-full mb-4">
                <h4 class="border-y border-gray-300 py-2 px-2 lg:px-8 text-2xl font-medium mb-8 bg-gradient-to-b from-red-500 to-red-800 text-white">{{ (index + 1) + '. ' + mainCourse.name }}
                    Course</h4>
                <div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-6">
                        <div v-for="(course, index) in mainCourse.courses" :key="course.name"
                            class="w-full mb-4 bg-white block col-span-1 rounded-md overflow-hidden shadow-lg">
                            <img src="../images/building.jpg" alt="" class="w-full h-[240px] object-cover mb-2">
                            <div class="p-4">
                                <h1 class="text-xl font-bold mb-2">{{ course.name }}</h1>
                                <p class="mb-2">{{ course.about }}</p>
                                <p
                                    class="inline-block relative left-full -translate-x-full text-white bg-red-500 py-1 px-3 font-medium text-lg">
                                    {{ course.fee }} mmk</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="bg-gray-700">
            </div>
        </div>

        <!-- //! copyright -->
        <div class="w-full bg-red-900 text-white text-center py-1">@copyright 2023 - All rights preserved to Mauc Training
            Center</div>
    </div>
</template>

<script setup>
import MiddleHeader from '../components/MiddleHeader.vue';

//^ 'basic course', 'basic to advanced course', 'drafting course', 'M&E drafting course', 'Electrical Drafting Course'
const mainCourses = [
    {
        name: 'AutoCAD',
        courses: [
            { name: "Basic Course", about: "in this basic course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
            { name: "Basic to Advanced Course", about: "in this course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
            { name: "Drafting Course", about: "in this basic course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
            { name: "M&E Drafting Course", about: "in this basic course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
            { name: "Electrical Drafting Course", about: "in this basic course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
        ]
    },
    {
        name: 'Revit',
        courses: [
            { name: "Basic Course", about: "in this basic course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
            { name: "Basic to Advanced Course", about: "in this course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
        ]
    },
    {
        name: 'SketchUp',
        courses: [
            { name: "Basic Course", about: "in this basic course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
            { name: "Basic to Advanced Course", about: "in this course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
        ]
    },
    {
        name: 'Graphic Design',
        courses: [
            { name: "Logo Design", about: "in this basic course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
            { name: "Poster and Billboard Design", about: "in this course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
        ]
    },
]
</script>

<style lang="scss" scoped></style>