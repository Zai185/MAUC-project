<template>
    <img :src="lesson.url" alt=""
        class="fixed object-contain w-screen h-screen bg-gradient-to-r from-gray-500 to-gray-300 -z-10">

    <!-- main  -->
    <div class="pt-16">

        <div class="flex flex-col gap-8 px-8 py-8 sm:py-16 md:flex-row xxl:px-16 glass ">
            <!-- image  -->
            <div
                class="flex md:block min-w-[256px] md:w-64 gap-4 border-[#aaa] justify-center sm:justify-between items-center">
                <img :src="lesson.url" alt=""
                    class="object-cover flex-none max-w-[256px] w-full md:w-full h-64 object-center mb-4 bg-gradient-to-t from-gray-500 to-[#ccc] rounded-full overflow-hidden">
                <div
                    class="hidden sm:flex flex-col flex-none w-1/2 md:w-full overflow-hidden bg-[#8884] text-center text-gray-100 rounded-lg">
                    <p class="py-1 text-[20px] font-medium text-gray-100 border border-b-0" :class="lesson.bg">Course Detail
                    </p>
                    <div class="flex justify-between p-2 font-semibold border border-b-0">
                        <div class="w-1/2 border-r">Fee</div>
                        <div class="w-1/2 ">{{ lesson.fee }} mmk</div>
                    </div>
                    <div class="flex justify-between p-2 font-semibold border border-b-0">
                        <div class="w-1/2 border-r">Quick Course</div>
                        <div class="w-1/2 ">{{ lesson.fee * 1.5 }} mmk</div>
                    </div>
                    <div class="flex justify-between p-2 font-semibold border border-b-0">
                        <div class="w-1/2 border-r">Duration</div>
                        <div class="w-1/2 ">{{ lesson.duration }} months</div>
                    </div>
                    <div class="flex justify-between p-2 font-semibold border">
                        <div class="w-1/2 border-r">Duration(Hrs)</div>
                        <div class="w-1/2 ">{{ lesson.hours }} Hr</div>
                    </div>
                    <div class="h-1 bg-white"></div>
                </div>
            </div>
            <!-- text  -->
            <div class="w-[calc(100% - 320px)] flex-none-0 border-t">
                <h1 class="text-[28px] lg:text-[40px] text-white text-shadow font-bold roboto xl:leading-[72px] my-4">
                    {{ lesson.name }}
                </h1>
                <p class="noto md:text-base lg:text-lg text-shadow text-white xl:leading-[36px]" v-html="lesson.about">
                </p>
                <ul class="mt-4">
                    <li class="star text-[20px] text-white text-shadow">
                        <span class="font-bold">10%</span>
                        discount for old students
                    </li>
                </ul>

                <div
                    class="flex mt-2 sm:hidden flex-col flex-none w-full overflow-hidden bg-[#8884] text-center text-gray-100 rounded-lg">
                    <p class="py-1 text-[20px] font-medium text-gray-100 border border-b-0" :class="lesson.bg">Course Detail
                    </p>
                    <div class="flex justify-between p-2 font-semibold border border-b-0">
                        <div class="w-1/2 border-r">Fee</div>
                        <div class="w-1/2 ">{{ lesson.fee }} mmk</div>
                    </div>
                    <div class="flex justify-between p-2 font-semibold border border-b-0">
                        <div class="w-1/2 border-r">Quick Course</div>
                        <div class="w-1/2 ">{{ lesson.fee * 1.5 }} mmk</div>
                    </div>
                    <div class="flex justify-between p-2 font-semibold border border-b-0">
                        <div class="w-1/2 border-r">Duration</div>
                        <div class="w-1/2 ">{{ lesson.duration }} months</div>
                    </div>
                    <div class="flex justify-between p-2 font-semibold border">
                        <div class="w-1/2 border-r">Duration(Hrs)</div>
                        <div class="w-1/2 ">{{ lesson.hours }} Hr</div>
                    </div>
                    <div class="h-1 bg-white"></div>
                </div>
                <hr class="w-3/4 mt-4 opacity-60">


                <div class="flex gap-2 mt-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="min-w-[24px] w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                    <p>maucmyanmar@gmail.com</p>

                </div>
                <div class="flex gap-2 mt-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 min-w-[24px] h-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p>No.29 1st Floor, (1) ward, Insein Main Road, Kamaryut Township, Yangon</p>

                </div>
                <div class="flex gap-2 mt-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 min-w-[24px] h-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p>No.1222, 2nd Floor, (35)ward, Pinlon Main Road, North Dagon Township, Yangon</p>
                </div>
                <hr class="w-4/5 mt-4 opacity-50">


                <div class="mt-2 font-medium text-white">
                    <p>Find us on Social Media</p>
                    <div class="flex items-center gap-3 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 cursor-pointer facebook" viewBox="0 0 20 20">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0Z" />
                        </svg>



                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 cursor-pointer insta" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 cursor-pointer youtube hover:text-[#f00] hover:bg-white" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>


                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const lesson = JSON.parse(localStorage.getItem('COURSE'))
</script>

<style lang="scss" scoped>
.star::before {
    content: '★ ';
    color: #c7ed20;
    text-shadow: none;
}

.glass {
    max-width: calc(1440px - 256px);
    width: calc(100vw - 64px);
    background: rgb(2, 0, 36);
    background: radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 100%);
    backdrop-filter: blur(50px);
    margin: auto;
    border-radius: 32px;
}

.text-shadow {
    text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
}

.roboto {
    font-family: 'Roboto', sans-serif;
}

.noto {
    font-family: 'Noto Sans Myanmar', sans-serif;
}

.insta:hover {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
    border-radius: 8px;

}

.facebook:hover {
    background: #edf0f5;
    color: #3B5998;

}

.facebook,
.insta,
.youtube {
    transition: all 200ms;
}




@media (min-width: 1280px) {
    .glass {

        width: calc(100vw - 256px);
    }
}</style>