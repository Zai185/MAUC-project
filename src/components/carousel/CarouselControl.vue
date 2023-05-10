<template>
    <div>
        <button class="absolute top-1/2 left-0 md:left-4 -translate-y-1/2 p-1 text-white cursor-pointer" @click="emits('prev')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-8 h-8 md:w-12 md:h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
        <button class="absolute top-1/2 right-0 md:right-4 -translate-y-1/2 p-3 text-white cursor-pointer" @click="emits('next')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-8 h-8 md:w-12 md:h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    </div>
</template>

<script setup>
const emits = defineEmits(['next', 'prev'])
</script>

<style lang="scss" scoped></style>