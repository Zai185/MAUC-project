<template>
    <div class="w-full overflow-hidden px-32 py-16 bg-slate-800 h-[100vh]">
        <div class='flex items-start justify-center gap-8 border p-4 rounded-lg shadow-lg shadow-gray-500 bg-white flex-wrap'>
            <div class="w-full flex items-start gap-8">
                <div class="flex flex-col w-72 relative overflow-hidden">
                    <img :src="course.url" class="w-full h-64 border border-black" />
                    <!-- <div class="border border-red-500 rounded flex items-center mt-2">
                        <p class="font-medium text-white bg-red-600 py-1 px-3">Fee</p>
                        <p class="px-2 font-medium">{{course.fee}} mmk</p>
                    </div> -->
                    <div class="absolute flex items-center -top-8 origin-left -right-12 rotate-[30deg] bg-red-800 text-white px-12 py-1">
                        <p class="font-medium">{{course.fee}} mmk</p>
                    </div>
                </div>
                <div class="w-[calc(100vw-256px)] flex flex-col items-start justify-between gap-4">
                    <div>
                        <h3 class="text-4xl font-semibold underline underline-offset-3 mb-4">{{ course.name }}</h3>                    
                            <legend class="underline font-medium">Description</legend>
                            <p v-html="course.about" class="text-lg text-justify"></p>
                    </div>
                    <div class=" mb-2 flex items-center justify-start gap-4 rounded-lg overflow-hidden border border-red-600">
                        <p class="text-lg bg-red-600 text-white py-2 px-3 w-24 text-center">Duration</p>
                        <p class="text-lg font-medium border-r border-black pr-3">{{`${course.duration.start} - ${course.duration.end}`}}</p>
                        <div class="flex items-center gap-2">
                            <p v-for="date in dates" :key="date" class="font-medium p-1 rounded-full w-12 text-center border-r " :class="[course.duration.openDate.includes(date)? 'text-white bg-red-600' : '']">{{date}}</p>
                        </div>
                    </div>                    

                </div>
            </div>
            <!-- <div class="flex items-start gap-8">
                <div class="w-1/2 text-center rounded-lg overflow-hidden border border-red-500">
                    <h4 class="text-xl text-white bg-red-500 py-1 font-medium">Class Duration</h4>
                    <p class="text-lg py-4 font-medium">{{ `${course.duration.start} - ${course.duration.end}` }} </p>
                </div>
                <div class="w-1/2">
                    <h4 class="text-xl text-white bg-red-500">Class Duration</h4>
                    <p>{{ `${course.duration.start} - ${course.duration.end}` }} </p>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>
const course = JSON.parse(localStorage.getItem('course'))
const dates = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>

<style lang="scss" scoped></style>