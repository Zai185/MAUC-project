<template>
    <div id="triggerNavbar"></div> <!-- //!Trigger Point  -->
    <div class="flex items-center justify-between w-full h-16 px-8 md:px-16 py-7 bg-red-500 shadow-gray-600 z-[100]"
        :class="[navbarDown ? 'sticky top-0 left-0 animate-fade-tb shadow-md' : 'relative']"
        style="animation-duration: 300ms">
        <img src="../images/mauc.png" alt="mauc logo" class="object-contain w-10 h-10">
        
        <!-- //^ menu icon  -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @click="navbarOpen = true" class="block w-8 h-8 text-white cursor-pointer md:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <!-- //^ bigger screen  -->
        <div class="hidden md:flex">
            <router-link v-for="(nav) in navMenu" :key="nav.name" :to="nav.to" @click="scrollTop(); consoleLog()"
            :style="[$route.name == nav.name? 'pointer-events : none' : '']"
            class="relative block px-1 mx-3 text-lg text-white transition duration-300"
            :class="[$route.name === nav.name ? 'text-shadow-on underline decoration-2 underline-offset-8' : 'text-shadow']">
                {{ nav.name }}
            </router-link>
        </div>
        <!-- //^ bigger screen  -->

        <!-- //^ smaller screen  -->


        <!-- //^ smaller screen  -->

    </div>
    <div class="block md:hidden fixed right-0 top-0 w-[256px] h-[100vh] bg-red-600 text-white shadow-md shadow-black py-4 transition duration-300 z-[101]"
        :class="[navbarOpen ? 'translate-x-0' : 'translate-x-full']">
        <p class="text-lg font-medium text-center underline underline-offset-2 ">Menu List</p>
        <div class="mt-8">
            <router-link v-for="(nav, index) in navMenu" :key="nav" :to="nav.to" @click="scrollTop"
                class="block w-full py-2 pl-4 transition duration-300 border-b hover:bg-gray-100 hover:text-red-600"
                :class="[[index === 0 ? 'border-t' : '']]">
                {{ nav.name }}
            </router-link>
        </div>
        <!-- //^cross icon  -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @click="navbarOpen = false" class="absolute w-8 h-8 cursor-pointer top-2 right-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
    <router-view></router-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const navMenu = [
    { name: 'Home', to: { name: 'Home' } },
    { name: 'About', to: { name: 'About' } },
    { name: 'Courses', to: { name: 'Courses' } },
    { name: 'Services', to: { name: 'Services' } },
    { name: 'Contact', to: { name: 'Contact' } },

]

function consoleLog(){
    console.log('click')
}

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

function scrollTop() {
    navbarOpen.value = false
    setTimeout(() => {
        scrollTo(0, 0)
    }, 10);
}

</script>

<style lang="scss" scoped>
.text-shadow-on {
    color: white;
    text-shadow: 1px 1px 10px rgba(255, 255, 255, 1);
}

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
}</style>