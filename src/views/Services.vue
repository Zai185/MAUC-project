<template>
    <div>
        <!-- //! carousel -->
        <div class="relative w-full">
            <div class="absolute top-0 left-0 z-30 w-full h-full bg-black opacity-70"></div>
            <div class="absolute z-40 flex flex-col items-center justify-center w-full h-full">
                <div class="text-center text-white">
                    <h3 class="mb-2 text-4xl font-medium">See Our Service Here</h3>
                    <p class="text-md">We have been providing our customers<br>a lot of services and have done many projects
                        efficiently</p>
                </div>
                <div
                    class="absolute text-center text-white -translate-x-1/2 cursor-pointer bottom-4 left-1/2 animate-pulse">
                    <a href="#main_services">
                        <p class="text-lg">scroll down to continue</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="inline w-8 h-8 ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

                </div>
            </div>
            <img src="../images/building.jpg" alt="building" class="w-full h-[360px]">
        </div>

        <div class="px-4 sm:px-8 md:px-12 lg:px-24" id="main_services">
            <MiddleHeader header="Services" subheader="services we provide" class="py-7" />
            <div v-for="(service, index) in services" :key="`service_${index}`"
                class="flex flex-col w-full mb-8 overflow-hidden rounded shadow lg:flex-row">
                <img src="../images/building.jpg" alt="building" class="w-full lg:w-1/2 h-[300px] object-cover"
                    :class="[index % 2 == 0 ? 'lg:order-2' : '']">
                <div class="flex flex-col w-full px-2 bg-white shadow lg:w-1/2 sm:px-8 py-7 lg:py-2">
                    <div class="text-center lg:text-left">
                        <h1 class="py-2 mb-4 text-3xl font-bold lg:block lg:mb-8">{{ service.name }}</h1>
                        <p class="mb-4 text-justify text-gray-800 text-md">{{ service.description }}</p>
                        <ul class="flex flex-wrap">
                            <li v-for="(outline) in service.outlines" :key="`${service}_${outline}`"
                                class="inline-block w-auto px-2 py-1 mx-2 mb-2 text-white bg-red-700 rounded">{{ outline }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <MiddleHeader header="Projects" subheader="projects we have finished" class="py-7" />
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div v-for="(project, index) in projects" :key="`project_${index}`"
                    class="block w-full col-span-1 mb-4 overflow-hidden bg-white rounded-md shadow-lg">
                    <div class="overflow-hidden">
                        <img :src="project.url" :alt="project.url" class="w-full h-[240px] object-contain scale-150 hover:scale-100 transition duration-300 mb-2">
                    </div>
                    <div class="p-4">
                        <h1 class="mb-2 text-xl font-bold">{{ project.name }}</h1>
                        <p class="mb-2">{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- //! copyright -->
        <Copyright/>
    </div>
</template>

<script setup>
import MiddleHeader from '../components/MiddleHeader.vue';
import Copyright from '../components/Copyright.vue';

const services = [
    { name: 'Landscape Project', description: "In this service, experienced professionals provide comprehensive landscape construction solutions from site preparation to installation, ensuring high-quality results that meet the client's needs and preferences.", outlines: ['outline one', 'outline two'] },
    { name: 'Public Building Services', description: "In this service, skilled professionals offer design and construction solutions for public buildings such as schools, libraries, and government facilities. Projects are delivered on time and within budget with a focus on sustainability and accessibility.", outlines: ['outline one'] },
    { name: 'Residential Service', description: "In this service, homeowners can expect personalized attention and tailored solutions for their home improvement needs, including renovations, repairs, and maintenance. Experienced professionals ensure quality workmanship and customer satisfaction.", outlines: ['outline one', 'outline two'] }
]

const projects = [
    { name: 'HDB Solar PV System Drawings', url: '../images/projects/solor-pv-sys.jpg' ,description: 'The solar PV system drawing project involves creating a detailed diagram of the components involved in a photovoltaic system, such as solar panels, inverters, batteries, and electrical connections, using specialized software and technical knowledge.' },
    { name: 'Myanmar Art & Handcrafts Center Project', url: '../images/projects/art-handcrafts.jpg',description: 'In this project, a dam will be constructed to harness the power of water, generating renewable energy and providing irrigation for agriculture and potable water for communities.' },
    { name: 'Kaei Dam Project', url: '../images/projects/kaei-dam.jpg', description: "I have completed the railway line drawing project, which includes a detailed plan of the railway system's features, such as tracks, switches, and signals. The drawing ensures the system is efficient and safe." },
    { name: 'Circular Railway Line(Capricoin Survey)',url: '../images/projects/capricoin-survey.jpg', description: "I have created a detailed drawing of the monastery, including architectural features, such as the layout of the buildings, landscape design, and interior details, reflecting the monastic tradition and style." }
]

</script>

<style lang="scss" scoped></style>