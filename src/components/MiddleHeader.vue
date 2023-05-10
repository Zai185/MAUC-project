<template>
    <div class="text-center">
        <h4 class="text-2xl font-medium first-letter:capitalize">{{header}}</h4>
        <p class="font-light tracking-widest capitalize">{{subheader}}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    header: String,
    subheader: String,
})
</script>

<style lang="scss" scoped>

</style>