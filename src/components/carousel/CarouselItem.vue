<template>
    <transition :name="direction"  >
            <div class="absolute left-0 top-0 right-0 bottom-0" v-show="currentSlide === index">
                <img :src="slide" alt="" class="object-cover w-full h-full">
            </div>
    </transition>

    
</template>

<script setup>
import CenterTextbox from './CenterTextbox.vue'

const { slide, currentSlide, index, direction } = defineProps({
    slide: String,
    currentSlide: Number,
    index: Number,
    direction : String,
    texts : Object
})

</script>

<style lang="scss" scoped>
.slide-out-enter-active,
.slide-out-leave-active,
.slide-in-enter-active,
.slide-in-leave-active {
    transition: all 1s ease;
}

.slide-out-enter-from {
    transform: translateX(100%);
}

.slide-out-leave-to {
    transform: translateX(-100%);
}
.slide-in-enter-from {
    transform: translateX(-100%);
}

.slide-in-leave-to {
    transform: translateX(100%);
}
</style>