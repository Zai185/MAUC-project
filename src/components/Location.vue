<template>
    <div class="px-16">
        <MiddleHeader header="location" subheader="we provide on-campus classes" />
        <div class="flex items-center h-[512px] mt-12">
            <div
                class="w-2/5 h-full bg-red-500 md:py-8 md:px-4 lg:px-6 xl:p-12 whitespace-nowrap text-white overflow-hidden">
                <h5 class="overflow-hidden text-3xl lg:text-4xl xl:text-5xl mb-2 font-bold underline underline-offset-2"
                    :class="[trigger ? 'animate-fade-in-out' : 'animate-fade-in-out-re']">{{ stateTrigger ? 'Hledan' :
                        'North Dagon' }}</h5>
                <!-- //^ icons -->
                <div class="flex flex-col gap-4 mt-8">
                    <div class="flex text-lg gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="block w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div class="overflow-hidden relative w-4/5 h-16 whitespace-normal">
                            <p>
                                <transition name="slide-out">
                                    <p v-show="stateTrigger" class="absolute top-0 right-0 bottom-0 left-0">123 loem this is
                                        the example text of something</p>
                                </transition>
                            </p>
                            <transition name="slide-out">
                                <p v-show="!stateTrigger" class="absolute top-0 right-0 bottom-0 left-0">1890 loem this is
                                    the example text of something</p>
                            </transition>
                        </div>
                    </div>
                    <div class="flex whitespace-normal text-lg gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>

                        <div class="overflow-hidden">
                            <p class="w-full break-words">
                                +959 954 333 511 kjjkkjk kjjlkj jlkjlkj lkjlkj kjjk kkjk
                            </p>
                        </div>
                    </div>

                </div>
                <!-- //^ /icons -->
            </div>
            <div class="w-3/5 h-full">
                <!-- <div class="w-full h-full bg-gradient-to-r from-red-500 absolute top-0 left-0 z-10"></div> -->
                <Carousel :slides="slides" class="w-full h-full" @state-change="stateChange">

                </Carousel>
            </div>
        </div>
    </div>
</template>

<script setup>
import Carousel from './carousel/Carousel.vue';
import MiddleHeader from './MiddleHeader.vue';

import { ref } from 'vue';

const trigger = ref(true)
const stateTrigger = ref(true)



function stateChange() {
    trigger.value = !trigger.value;
    setTimeout(()=>{

        stateTrigger.value = !stateTrigger.value
    }, 1010)
}
</script>

<style lang="scss" scoped>
.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 1s ease;
}

.slide-out-enter-from {
    transform: translateX(-100%);
}

.slide-out-leave-to {
    transform: translateX(100%);
}
</style>