<script setup>
const items = [1, 2, 3, 4, 5, 6];
//List Rendaring - means in vue when we render loop 
</script>

<template>
  <section
    class="mx-auto container p-10 flex items-center text-center flex-col space-y-2" >
    <div class="p-5 border border-gray-600 w-40" v-for="(item, index) in items" :key="index" >
      {{ item }}
    </div>
  </section>
</template>

<style scoped></style>
