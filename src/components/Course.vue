<template>
    <div>
        <div>
            <MiddleHeader header="Course" subheader="course we offer" />

            <!-- //^course element  -->
            <div class="w-full flex items-center flex-wrap px-2 sm:px-8 lg:px-32 my-12">
                <div class="border border-black w-full h-[232px] sm:w-1/2 ">
                    
                </div>
                <div class="border border-red-600 w-full sm:w-1/2 h-full text-left p-4">
                    <h4 class="text-2xl lg:text-3xl mb-2 font-bold">Course Name</h4>
                    <p class="text-sm lg:text-md text-gray-800 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti facere iure corporis delectus suscipit quod unde optio. Deserunt recusandae illum eligendi nemo molestiae sequi?</p>
                    <div class="border border-red-500 rounded-full inline-block pl-3 mt-3 mb-4 text-red-600">
                        2-month course
                        <div class="inline-block bg-gradient-to-t from-red-400 to-red-600 text-white py-1 px-2 rounded-full shadow shadow-black">
                            90000 mmk
                        </div>
                    </div>
                    <div>
                        <button class="border border-red-600 text-red-600 font-medium transition duration-300 py-1 px-3 hover:bg-red-600 hover:text-white">Get the Course Now</button>
                    </div>
                </div>
            </div>
            <!-- //^course element one -->
            <!-- //^course element two -->
            <div class="w-full flex items-center flex-wrap px-2 sm:px-8 lg:px-32 my-12">
                <div class="border border-black w-full h-[232px] sm:w-1/2 sm:order-2">
                    
                </div>
                <div class="border border-red-600 w-full sm:w-1/2 h-full text-left p-4">
                    <h4 class="text-2xl lg:text-3xl mb-2 font-bold">Course Name</h4>
                    <p class="text-sm lg:text-md text-gray-800 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti facere iure corporis delectus suscipit quod unde optio. Deserunt recusandae illum eligendi nemo molestiae sequi?</p>
                    <div class="border border-red-500 rounded-full inline-block pl-3 mt-3 mb-4 text-red-600">
                        2-month course
                        <div class="inline-block bg-gradient-to-t from-red-400 to-red-600 text-white py-1 px-2 rounded-full shadow shadow-black">
                            90000 mmk
                        </div>
                    </div>
                    <div>
                        <button class="border border-red-600 text-red-600 font-medium transition duration-300 py-1 px-3 hover:bg-red-600 hover:text-white">Get the Course Now</button>
                    </div>
                </div>
            </div>
            <!-- //^course element two -->
            
        </div>
    </div>
</template>

<script setup>
import MiddleHeader from './MiddleHeader.vue';
</script>

<style lang="scss" scoped></style>