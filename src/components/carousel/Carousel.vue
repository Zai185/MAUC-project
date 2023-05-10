<template>
    <div class="flex justify-center w-full h-full">
        <div class="relative w-full overflow-hidden" :class="imageHeight">

            <CarouselItem v-for="(slide, index) in slides" :key="`item-${index}`" :slide="slide" :texts="texts"
                :currentSlide="currentSlide" :direction="direction" :index="index" class="-z-10" />

            <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-black via-gray-800 opacity-80 z-0"></div>

            <CarouselControl @next="next" @prev="prev" class="z-40" @click="toggleHide" />

            <CenterTextbox v-if="texts" v-for="(text, index) in texts" :key="`text-${index}`" :index="index"
                :currentSlide="currentSlide" :heading="text.heading" :subHeading="text.subHeading"
                :textPos="textPos" :buttons="text.buttons" :direction="direction" />
                
            <div class="absolute w-full flex items-center justify-center left-0 bottom-4">
                <div v-for="(no, index) in slides.length" class="w-10 h-1 border mx-1 transition duration-1000" :class="[index === currentSlide ? 'bg-white' : 'bg-transparent']"></div>
            </div>

        </div>
    </div>
    {{ texts[0].buttons.text }}
</template>

<script setup>

function toggleHide(event) {
    event.target.classList.add('hidden')
    setTimeout(() => {
        event.target.classList.remove('hidden')
    }, 1000);
}

import CarouselItem from './CarouselItem.vue';
import CarouselControl from './CarouselControl.vue';
import CenterTextbox from './CenterTextbox.vue';

import { ref } from 'vue';

const { slides, texts, imageHeight, textPos } = defineProps({
    slides: Array,
    texts: Array,
    imageHeight: String,
    textPos: String,
})

const emits = defineEmits(['stateChange'])

const currentSlide = ref(0)
const direction = ref('')

function setCurrentSlide(index) {
    currentSlide.value = index
}
function next() {
    const index = currentSlide.value < (slides.length - 1) ? currentSlide.value + 1 : 0;
    direction.value = 'slide-out'
    setCurrentSlide(index)

    // emits('stateChange') //! this is only necessary for parent element
}
function prev() {
    const index = currentSlide.value > 0 ? currentSlide.value - 1 : slides.length - 1;
    direction.value = 'slide-in'
    setCurrentSlide(index)
    // emits('stateChange') //! this is only necessary for parent element
}


</script>

<style lang="scss" scoped></style>