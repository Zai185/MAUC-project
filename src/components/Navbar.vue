<template>
    <div id="triggerNavbar"></div> <!-- //!Trigger Point  -->
        <div class="flex items-center justify-between w-full h-16 px-8 md:px-16 py-10 bg-red-500 shadow-md shadow-gray-600 z-[100]"
        :class="[navbarDown ? 'fixed top-0 left-0 animate-fade-tb' : 'relative']" style="animation-duration: 300ms">
        <img src="../images/mauc.png" class="w-12 h-12">
        <!-- //^ menu icon  -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @click="navbarOpen = true" class="w-8 h-8 block text-white md:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <!-- //^ bigger screen  -->
        <div class="hidden md:flex">
            <router-link v-for="(nav) in navMenu" :key="nav" :to="nav.to"
                class="mx-3 px-1 block transition duration-300 text-lg text-white relative" :class="[$route.name === nav.name ? 'underline underline-offset-2' : 'text-shadow']">
                {{ nav.name }}
            </router-link>
        </div>
        <!-- //^ bigger screen  -->

        <!-- //^ smaller screen  -->

        <div class="block md:hidden fixed right-0 top-0 w-[256px] h-[100vh] bg-red-600 text-white shadow-md shadow-black py-4 transition duration-300 "
            :class="[navbarOpen ? 'translate-x-0' : 'translate-x-full']">
            <p class="text-lg font-medium text-center underline underline-offset-2 ">Menu List</p>
            <div class="mt-8">
                <router-link v-for="(nav, index) in navMenu" :key="nav" :to="nav.to" @click="navbarOpen = false"
                    class="block w-full pl-4 py-2 border-b transition duration-300 hover:bg-gray-100 hover:text-red-600"
                    :class="[index == 0 ? 'border-t' : '']">
                    {{ nav.name }}
                </router-link>
            </div>
            <!-- //^cross icon  -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                @click="navbarOpen = false" class="w-8 h-8 absolute top-2 right-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>

        <!-- //^ smaller screen  -->

    </div>
    <router-view></router-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const navMenu = [
    { name: 'Home', to: { name: 'Home' } },
    { name: 'About', to: { name: 'About' } },
    { name: 'Course', to: { name: 'Course' } },
    { name: 'Service', to: { name: 'Service' } },

]
const navbarOpen = ref(false)
const navbarDown = ref(false)
onMounted(() => {
    const triggerNavbar = document.getElementById('triggerNavbar');
    window.addEventListener('scroll', () => {
        if (triggerNavbar.getBoundingClientRect().top <= -200) {
            navbarDown.value = true
        } else {
            navbarDown.value = false
        }
    })
})



</script>

<style lang="scss" scoped>
.text-shadow:hover {
    color: white;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 1);
}

.text-shadow::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    bottom: -2px;
    background-color: #fff;
    transition: 300ms ease;
    transform: scaleX(0);
    transform-origin: 0;
}

.text-shadow:hover::before {
    transform: scaleX(1)
}
</style>