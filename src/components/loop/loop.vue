<script setup>
// const items = [1, 2, 3, 4, 5, 6];
//List Rendaring - means in vue when we render loop 
// const tasks = [
//   "Complete project proposal",
//   "Update website content",
//   "Fix bug in user authentication",
//   "Prepare presentation slides",
//   "Test new feature implementation",
//   "Hello fulir ma",
// ];

const tasks = [
    { id: 1, title: "Complete project proposal - p", status: "In Progress" },
    { id: 2, title: "Update website content - c", status: "Completed" },
    { id: 3, title: "Fix bug in user authentication -p", status: "In Progress" },
    { id: 4, title: "Prepare presentation slides -pen", status: "Pending" },
    { id: 5, title: "Test new feature implementation -p", status: "In Progress" },
    { id: 6, title: "Update website content - c", status: "Completed" },
    { id: 7, title: "Test new feature implementation -p", status: "In Progress" },
];


// function getCompletedTasks() {
//     return tasks.filter( function(task){
//         return  "Completed" == task.status
//     })
// }

</script>

<template>
  <section class="mx-auto container p-40">
    <section class="mx-auto container space-y-3">
        <!-- <div class="p-5 border border-gray-600 text-left" v-for="(task, index) in tasks" :key="task.id">{{ task.id }}. {{ task.title }} </div> -->
        <div class="p-5 border border-gray-600 text-left" v-for="(task, index) in tasks" :key="task.id" :class=" task.status == 'Completed'? 'bg-red-400' : '' ">{{ task.id }}. {{ task.title }} </div>
    </section>
  </section>
</template>

<style scoped></style>
