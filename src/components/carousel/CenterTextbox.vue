<template>
    <transition name="fade-opacity" v-show="props.index === props.currentSlide">
        <div class="absolute block w-4/5" :class="props.textPos" >
            <h3 class="text-2xl sm:text-3xl text-white mb-2">{{ props.heading }}</h3>
            <p class="text-white mb-4">{{ props.subHeading}}</p>
            <div class="flex items-center justify-center gap-4">
                <button v-for="button in props.buttons" class="py-1 px-4 bg-red-600 text-white cursor-pointer text-lg">
                    <router-link v-if="button.to" :to="button.to">{{ button.text }}</router-link>
                    <span v-else>{{button.text}}</span>
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup>

const props = defineProps({
    heading: String,
    subHeading: String,
    textPos : String,
    index: Number,
    currentSlide: Number,
    buttons: Object
})

</script>

<style lang="scss" scoped>

.fade-opacity-enter-active,
.fade-opacity-leave-active{
    transition: all 1s ease-in;
}

.fade-opacity-enter-from,
.fade-opacity-leave-to{
    opacity: 0;
}

</style>