<template>
    <div class="w-full shadow-md shadow-gray-700">
        <div class="w-full h-[244px] bg-gray-500 text-white flex items-center justify-center">
            {{ course.imgUrl }}
        </div>
        <div class="flex flex-col gap-2 bg-white  p-4">
            <h3 class="mt-2 text-xl font-medium capitalize">{{course.name}}</h3>
            <p class="text-justify">{{course.description}}</p>
            <div>
                <button class="bg-red-600 text-white py-1 px-3 hover:bg-red-700">Go to Course</button>
            </div>
        </div>
    </div>
</template>

<script setup>

const {course} = defineProps({
    course: Object
})

</script>

<style lang="scss" scoped>

</style>