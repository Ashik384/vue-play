<script setup>
// const items = [1, 2, 3, 4, 5, 6];
//List Rendaring - means in vue when we render loop 
const tasks = [
  "Complete project proposal",
  "Update website content",
  "Fix bug in user authentication",
  "Prepare presentation slides",
  "Test new feature implementation",
  "Hello fulir ma",
];
</script>

<template>
  <section class="mx-auto container p-40">
    <section class="mx-auto container space-y-3">
        <div class="p-5 border border-gray-600 text-left" v-for="(task, index) in tasks" :key="index"> {{ index+1 }}. {{ task }} </div>
    </section>
  </section>
</template>

<style scoped></style>
