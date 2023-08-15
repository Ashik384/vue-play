<script setup>
    import { ref } from 'vue'
    let color = ref('')

    function getstyle(){
        return{
            backgroundColor: color.value
        }
    }
</script>

<template>
    <section class="mx-auto container">
        <h1 class="text-2xl mb-10">Vue Form</h1>
        <p class="pb-5">Your Favorite Color: {{ color }}</p>
        <p> Your Favorite Color: 
        <input class="p-5 border-2" v-model="color" />
        <div class="w-32 h-32 mt-10" :style="getstyle()"></div>
        </p>
    </section>
</template>

<style scoped>
    
</style>