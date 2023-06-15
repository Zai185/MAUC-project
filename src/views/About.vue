<template>
    <div>
        <!-- //! carousel  -->
        <div class="relative w-full">
            <div class="absolute top-0 left-0 z-30 w-full h-full bg-black opacity-70"></div>
            <div class="absolute z-40 flex flex-col items-center justify-center w-full h-full">
                <div class="text-center text-white">
                    <h3 class="mb-2 text-4xl font-medium">About Our MAUC Training Center</h3>
                    <p class="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div
                    class="absolute text-center text-white -translate-x-1/2 cursor-pointer bottom-4 left-1/2 animate-pulse">
                    <a href="#main_about">
                        <p class="text-lg">scroll down to continue</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="inline w-8 h-8 ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

                </div>
            </div>
            <img src="../images/building.jpg" alt="building" class="w-full h-[360px]">
        </div>

        <div class="px-4 sm:px-12 md:px-20 xl:px-24" id="main_about"> <!-- //! wrapper -->
            <!-- //! about center  -->

            <div class="border-t border-gray-200 my-7">
                <MiddleHeader header="About Our Training Center" class="py-7" />
                <div class="flex flex-col w-full lg:flex-row">
                    <img src="../images/building.jpg" alt="building" class="w-full lg:w-1/2 h-[370px] object-cover">
                    <div class="flex flex-col justify-around w-full px-8 py-12 bg-white shadow lg:w-1/2 lg:py-8">
                        <div class="text-center lg:text-left">
                            <h1 class="mb-8 text-4xl font-bold sm:text-4xl lg:block">About Our Training Center</h1>
                            <p class="mb-2 text-lg text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Pariatur
                                quo asperiores
                                quos, obcaecati sequi dignissimos mollitia deleniti perferendis voluptates temporibus
                                maxime,
                                maiores exercitationem ipsa.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- //! about Teachers -->
            <div class="border-t border-gray-200 my-7">
                <MiddleHeader header="About Our Training Center" class="py-7" />
                <div class="flex flex-col w-full lg:flex-row">
                    <img src="../images/building.jpg" alt="building" class="w-full lg:w-1/2 h-[370px] object-cover lg:order-1">
                    <div class="flex flex-col justify-around w-full px-8 py-12 bg-white shadow lg:w-1/2 lg:py-8">
                        <div class="text-center lg:text-left">
                            <h1 class="mb-8 text-3xl font-bold sm:text-4xl lg:block">About Our Trainers</h1>
                            <p class="mb-2 text-lg text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Pariatur
                                quo asperiores
                                quos, obcaecati sequi dignissimos mollitia deleniti perferendis voluptates temporibus
                                maxime,
                                maiores exercitationem ipsa.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- //! about activity  -->
            <div class="border-t border-gray-200">
                <MiddleHeader header="Activities" subheader="we have done" class="py-7" />
                <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div v-for="(activity, index) in activities" :key="`activity_${index}`"
                        class="block w-full col-span-1 mb-4 overflow-hidden bg-white rounded-md shadow-lg">
                        <img src="../images/building.jpg" alt="" class="w-full h-[240px] object-cover mb-2">
                        <div class="p-4">
                            <h1 class="mb-2 text-xl font-bold text-justify">{{ activity.name }}</h1>
                            <p class="mb-2">{{ activity.about }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- //! copyright -->
        <Copyright/>
    </div>
</template>

<script setup>
import Copyright from '../components/Copyright.vue';
import MiddleHeader from '../components/MiddleHeader.vue';
const activities = [
    {name: 'Free Class', about: 'We have offer free class to 21 students on May, 2022'},
    {name: 'Donation to Flood Victims', about: 'We have help flood victims from Sagaing with food, water and other necessities on August 2021'},
    {name: 'Free Class', about: 'We have offer free class to 21 students on May, 2022'},
    {name: 'Free Class', about: 'We have offer free class to 21 students on May, 2022'},
]

</script>

<style lang="scss" scoped></style>