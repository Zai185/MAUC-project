<template>
    <div @scroll="checkBoxTop">
        <!-- //! carousel -->
        <div class="relative w-full">
            <div class="absolute top-0 left-0 z-30 w-full h-full bg-black opacity-70"></div>
            <div class="absolute z-40 flex flex-col items-center justify-center w-full h-full">
                <div class="text-center text-white">
                    <h3 class="mb-2 text-4xl font-medium">See Our Course Here</h3>
                    <p class="text-md">We have been providing <br>AutoCAD, Revit, SketchUp and Graphic Design!</p>
                </div>
                <div
                    class="absolute text-center text-white -translate-x-1/2 cursor-pointer bottom-4 left-1/2 animate-pulse">
                    <a href="#main_courses">
                        <p class="text-lg">scroll down to continue</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="inline w-8 h-8 ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

                </div>
            </div>
            <img src="../images/building.jpg" alt="" class="w-full h-[360px]">

        </div>

        <div class="px-4 xl:px-12" id="main_courses">
            <MiddleHeader header="Courses" class="border-b my-7" />
            <div v-for="(mainCourse, index) in mainCourses" :key="`main_course_${index}`" :id="`main_course_${index + 1}`"
                @click="showId" class="relative w-full pt-2 mb-4" :ref="`main_course_${index}`">
                <div class="flex items-center justify-between px-2 py-1 mb-2 rounded" :class="mainCourse.bgColor">
                    <h3 class="flex items-center py-1 text-2xl font-semibold text-white">
                        {{ (index + 1) + '. ' + mainCourse.name }}
                    </h3>
                    <div class="flex items-center gap-2 px-3 py-1 my-1 text-white border rounded-md">
                        <p class="font-medium">Courses</p>
                        <p class="flex items-center justify-center w-6 h-6 text-sm font-medium border rounded-full">
                            {{ mainCourse.courses.length }}</p>
                    </div>
                </div>

                <div :id="`gridHeight_${index}`">
                    <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div v-for="(course, ind) in mainCourse.courses" :key="course.name"
                            :id="`${mainCourse.name}_${ind}`" :style="`transition-delay: ${70 * ind}ms `"
                            class="w-full mb-4 block col-span-1 rounded-md overflow-hidden shadow-lg opacity-0 transition duration-[400ms]">
                            <div class="relative">
                                <router-link
                                    :to="{ name: 'CourseView', params: { slug: courseSlug(mainCourse.name, course.name) } }"
                                    @click="courseToLocal(course, mainCourse.url, mainCourse.bgColor, mainCourse.textColor)">
                                    <img :src="mainCourse.url" alt=""
                                        class="w-full h-[240px] bg-gradient-to-tr from-orange-400 to-yellow-200 mb-2"
                                        :class="[index === mainCourses.length - 1 ? 'object-cover object-left' : 'object-contain']">
                                </router-link>
                                <p class="absolute bottom-0 right-0 z-20 px-2 py-1 text-white bg-gray-900">{{ course.name }}
                                </p>
                            </div>
                            <div class="px-4 pb-4 transition bg-white">
                                <h1 :id="`test_${index}_${ind}`"
                                    class="flex items-center lg:h-[65px] text-xl font-bold border-b border-gray-300">
                                    {{ course.name }}</h1>
                                <p class="mb-2 pt-2 pb-4 w-full md:max-h-[150px] md:overflow-y-scroll text-ellipsis transition"
                                    v-html="course.about"></p>
                                <p
                                    class="relative inline-block px-3 py-1 text-lg font-medium text-white -translate-x-full bg-red-500 left-full">
                                    {{ course.fee }} mmk</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="bg-gray-700">
            </div>
        </div>

        <!-- //! copyright -->
        <Copyright />
    </div>
</template>

<script setup>
import Copyright from '../components/Copyright.vue';
import MiddleHeader from '../components/MiddleHeader.vue';
import { ref, onMounted } from 'vue';

function courseSlug(mainCourse, sideCourse) {
    let main = mainCourse.toLowerCase().replaceAll(' ', '-')
    let side = sideCourse.toLowerCase().replaceAll(' ', '-')
    return `${main}_${side}`
}

function courseToLocal(course, url, bg, text) {
    let item = { url, bg, text, ...course }
    localStorage.setItem('COURSE', JSON.stringify(item))
}

onMounted(() => {
    const imgs = document.querySelectorAll('img')
    imgs.forEach(img => {
        img.setAttribute('loading', 'lazy')
    })

    const allDivs = ['AutoCAD_0', 'AutoCAD_1', 'AutoCAD_2', 'AutoCAD_3', 'AutoCAD_4', 'Revit_0', 'Revit_1', 'SketchUp_0', 'SketchUp_1', 'Graphic Design_0', 'Graphic Design_1', 'Estimate and Computer Basic_0', 'Estimate and Computer Basic_1']

    allDivs.forEach(d => {

        let allDiv = document.getElementById(d)
        if (allDiv) {

            if (allDiv.getBoundingClientRect().top <= window.innerHeight * 0.95) {
                allDiv.style.opacity = 1
            } else {
                allDiv.style.opacity = 0

            }
        }
    })

    window.addEventListener('scroll', () => {
        allDivs.forEach(d => {
            let allDiv = document.getElementById(d)
            if (allDiv) {
                if (allDiv.getBoundingClientRect().top <= window.innerHeight * 0.95) {
                    allDiv.style.opacity = 1
                } else {
                    allDiv.style.opacity = 0

                }
            }
        })

    })
})

//^ 'basic course', 'basic to advanced course', 'drafting course', 'M&E drafting course', 'Electrical Drafting Course'
const mainCourses = [
    {
        id: 1,
        name: 'AutoCAD',
        courses: [
            { name: "Intermediate Course", about: "AutoCAD ကို အခြေခံမှစပြီး လေ့လာလိုသူများအတွက် AutoCAD 2D, Isometric & 3D Modeling တွေအထိ Building Exercise များဖြင့် လေ့လာသင်ကြားနိုင်သော Basic Course တစ်ခုဖြစ်ပါတယ်", fee: 100000, duration: 2, hours: 40 },
            { name: "Advanced Drafting Course", about: "AutoCAD Basic အခြေခံရှိပြီး လုပ်ငန်းခွင်တွင် CAD drafter တစ်ဦးအနေဖြင့် လုပ်ကိုင်လိုသူများအတွက် ရည်ရွယ်သင်ကြားပေးသော AutoCAD Advanced Course ဖြစ်ပါတယ်<br> Archi Building Project များကို Floor Plan Drawing မှစ Elevations, Sections & Details Drawing များအထိ Project တစ်ခုလုံးစာ Print ထုတ်သည်အထိ ကျွမ်းကျင်တတ်မြောက်အောင် လေ့ကျင့်သင်ကြားပေးမှာဖြစ်ပါတယ်", fee: '150000', duration: 2.5, hours: 60 },
            { name: "Structural Drawing Course(Civil Specialized)", about: "AutoCAD အခြေခံတတ်မြောက်ထားသူများအတွက် Structural Drawing များကို လုပ်ငန်းခွင်တွင် ရေးဆွဲနိုင်အောင် သင်ကြားပေးသော Civil Drawing Course တစ်ခုဖြစ်ပါတယ် <br> R.C Building နှင့် Steel Structure Building Project များကို Drawing, Rebar Drawing, Connection & Detail Drawing များအထိ အသေးစိတ်ရေးဆွဲနိုင်အောင့် လေ့ကျင့်သင်ကြားပေးသော Civil Course ဖြစ်ပါတယ်", fee: 150000, duration: 2.5, hours: 60 },
            { name: "Electrical Drafting Course", about: "လုပ်ငန်းခွင်တွင် Electrical Drawing များ၊ Diagram များ၊ Electrical Service Drawing များဖန်တီးရေးဆွဲနိုင်ရန် Electrical သဘောတရားများကို အခြေခံမှစ သင်ကြားပေးသော Electrical Drafting Course တစ်ခုဖြစ်ပါတယ်<br> AutoCAD 2D အခြေခံမှစ သင်ကြားပေးမှာဖြစ်တာကြောင့် AutoCAD အခြေခံမရှိသေးသော သူများလည်းတက်ရောက်နိုင်ပါတယ်", fee: 150000, duration: 2.5, hours: 60 },
            { name: "MEP Drafting Course", about: "လုပ်ငန်းခွင်တွင် MEP Service Drawing များရေးဆွဲရန် လိုအပ်သူများအတွက် MEP အခြေခံမှစ Drawing များ Reference Project များဖြင့် လေ့ကျင့်သင်ကြားပေးသော MEP Drafting Course တစ်ခုဖြစ်ပါတယ်<br>AutoCAD 2D အခြေခံမှစသင်ကြားပေးမှာ ဖြစ်တာကြောင့် AutoCAD အခြေခံမရှိသေးသောသူများလည်း တက်ရောက်နိုင်ပါတယ်", fee: 180000, duration: 2.5, hours: 38 },
        ],
        url: '../images/logos/autocad.png',
        textColor: 'text-red-500',
        bgColor: 'bg-red-500',

    },
    {
        id: 3,
        name: 'Revit',
        courses: [
            { name: "Modeling Course(Archi & Structure)", about: "Revit ကို အသုံးပြုပြီး Projectများ တည်ဆောက်ရေးဆွဲလိုသူများ၊ ပြည်တွင်း/ပြည်ပတွင် BIM Modeler ဖြင့်လုပ်ကိုင်လိုသူများအတွက် သင်ကြားနိုင်သော Archi & Structure Modeling Course တစ်ခုဖြစ်ပါတယ်<br>Building Project တစ်ခုလုံးကို Archi/Structural Drawing များထုတ်လုပ်ပေးနိုင်သည့် Documentation များအထီ အသေးစိတ်လေ့လာသင်ကြားရမှာဖြစ်ပါတယ်", fee: 200000, duration: 2.5, hours: 54 },
            { name: "MEP Modeling Course", about: "ပြည်တွင်း/ပြည်ပ MEP လုပ်ငန်းခွင်များတွင် (MEP) BIM Modeler ဖြင့် လုပ်ကိုင်လိုသူများတက်ရောက်သင့်သော Revit MEP Modeling Course ဖြစ်ပါတယ်<br>Archi Modeling အခြေခံကိုပါ ထည့်သွင်းသင်ကြားပေးမှာမို့ Revit ကိုလုံးဝအသုံးမပြုတတ်သေးသောသူများလည်း တက်ရောက်လေ့လာနိင်သော သင်တန်းဖြစ်ပါတယ်", fee: 200000, duration: 2.5, hours: 60 },
        ],
        url: '../images/logos/revit.png',
        textColor: 'text-blue-500',
        bgColor: 'bg-blue-500'
    },
    {
        id: 4,
        name: 'SketchUp',
        courses: [
            { name: "Basic Course", about: "Archi Modeling & Rendering များ စိတ်ဝင်စားရေးဆွဲလိုသူများအတွက် တက်ရောက်သင့်သော SketchUp Basic Modeling သင်တန်းတစ်ခုဖြစ်ပါတယ်<br>အဆောက်အဦးများကို 3D Modeling ပြုလုပ်ခြင်း၊ Material ကပ်ခြင်း၊ Interior/Exterior View များဖန်တီးရေးဆွဲနိုင်သည်အထီ အခြေခံမှစ သင်ကြားပေးသော Modelling သင်တန်းတစ်ခုဖြစ်ပါတယ်", fee: 100000, duration: 2, hours: 32 },
            { name: "Advanced Course", about: "SketchUp Modeling အခြေခံတတ်မြောက်ပြီးသူများ Advanced Rendering အထိ လေ့လာနိုင်အောင် Rendering နှင့် Visualization ပိုင်းများ အသေးစိတ်သင်ကြားပေးသော Course ဖြစ်ပါတယ်<br> Modeling, Decoration & Rendering ပိုင်း စိတ်ဝင်စားရေးဆွဲလိုသူများ SketchUp Advanced Level ကို တက်ရောက်နိုင်ပါတယ်", fee: 150000, duration: 2.5, hours: 54 },
        ],
        url: '../images/logos/sketchup.png',
        textColor: 'text-red-600',
        bgColor: 'bg-red-600'
    },
    {
        id: 2,
        name: 'Graphic Design',
        courses: [
            { name: "Logo Design", about: "in this basic course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
            { name: "Poster and Billboard Design", about: "in this course, you will learn about the basic structure of architect, structure and so on...", fee: '120000' },
        ],
        url: '../images/logos/photoshop-logo.png',
        textColor: 'text-blue-800',
        bgColor: 'bg-blue-800',
    },
    {
        id: 5,
        name: 'Estimate and Computer Basic',
        courses: [
            { name: 'Civil Estimate(QS) Course', about: 'လုပ်ငန်းခွင်တွင် Building Quantity Survye(QS)ဖြင့် လုပ်ကိုင်လိုသူများအတွက် Civil Estimate အပိုင်းသီးသန့်သင်ကြားပေးသော သင်တန်းဖြစ်ပါတယ်။ Excel အခြေခံမရှိသူများအတွက် Excel အခြေခံကစကျွမ်းကျင်တတ်မြောက်လာအောင် သင်ကြားပေးမှာဖြစ်ပါတယ်', fee: '80000' },
            { name: 'Computer Basic Course', about: 'Computer ကို အခြေခံမှစ Microsoft Word, Excel, PowerPoint များအထိကျွမ်းကျင်တတ်မြောက်စွာ လေ့လာအသုံးပြုရန်လိုသူများအတွက် တက်ရောက်နိုင်သော Computer Basic(Office) သင်တန်းတစ်ခုဖြစ်ပါတယ်', fee: '80000' }
        ],
        url: '../images/microsoft-excel-skills.jpeg',
        textColor: 'text-gray-800',
        bgColor: 'bg-gray-800',
    }
]

function showId(event) {
    const el = document.getElementById('main_course_from_courses_0')
    // console.log(el)
}
</script>

<style lang="scss" scoped>
.shit::after {
    content: '';
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0;
    right: 0;
    background: #555;
    z-index: -5;
}

.nshit::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    bottom: 70%;
    right: 70%;
    background: red;
    z-index: -5;

}

.nshit::after {
    content: '';
    position: absolute;
    bottom: -3px;
    right: -3px;
    top: 70%;
    left: 70%;
    background: red;
    z-index: -10;

}

.write-mode {
    writing-mode: vertical-rl;
    transform: rotate(180deg)
}

@media (min-width: 768px) {
    .shit::after {
        top: 50%;
        bottom: 40%;
    }

}
</style>