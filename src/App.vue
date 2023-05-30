<template>
  <!-- <div v-if="loading" class="w-full h-[100vh] flex flex-col overflow-hidden justify-center items-center relative">
    <div class="flex flex-col items-start justify-start">
      <div class="flex items-center gap-2">
        <img src="./images/mauc.png" alt="" class="w-16 h-16">
        <h3 class="text-4xl font-semibold text-red-500">MAUC</h3>
      </div>
      <h3 class="text-4xl font-semibold text-yellow-400">Traning Center</h3>
    </div>

    <div class="h-[300vh] absolute -top-[700px] -z-10 flex rotate-[30deg]">
      <div v-for="(item,index) in items" :key="item" class="w-[256px] h-full bg-red-100 animate-y-translate" :style="`animation-delay: ${50 * index}ms`" :class="[`bg-red-${100 * (index +1)}`]"></div>

    </div> -->


  <!-- </div> -->
  <router-view></router-view>
</template>
<script setup>


</script>


<style scoped></style>
