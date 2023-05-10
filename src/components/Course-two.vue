<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <CourseItem v-for="(course,index) in courses" :key="`course_${index}`" :course="course"
        class="opacity-0 animate-fade-tb" :style="`animation-delay : ${index * 0.3}s`"/>
    </div>
</template>

<script setup>
import CourseItem from './CourseItem.vue';

const courses = [
    {
        name: 'Heading 1 ' , 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit vero eveniet dignissimos magni, molestiae porro. Officia unde repellendus at.',
        imgUrl : '1'
    },
    {
        name: 'Heading 2 ' , 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit vero eveniet dignissimos magni, molestiae porro. Officia unde repellendus at.',
        imgUrl : '2'
    },
    {
        name: 'Heading 3 ' , 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit vero eveniet dignissimos magni, molestiae porro. Officia unde repellendus at.',
        imgUrl : '3'
    },
    {
        name: 'Heading 4 ' , 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit vero eveniet dignissimos magni, molestiae porro. Officia unde repellendus at.',
        imgUrl : '4'
    },
    {
        name: 'Heading 7 ' , 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit vero eveniet dignissimos magni, molestiae porro. Officia unde repellendus at.',
        imgUrl : '7'
    },
]

</script>

<style lang="scss" scoped></style>