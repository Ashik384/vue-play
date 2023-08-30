<script setup>
import axios from 'axios';
import { ref } from 'vue';

const productList = ref(null)

GetProductList();
async function GetProductList(){
    if(productList.value == null){
        console.log("loading");
    } 
    let URl = "https://fakestoreapi.com/products"; //Api url
    let response = await axios.get(URl); // create Request here
    if(response.status === 200){
        productList.value = response.data
    }
}


</script>

<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    title 
                </th>
                <th scope="col" class="px-6 py-3">
                    description
                </th>
                <th scope="col" class="px-6 py-3">
                    id
                </th>
                <th scope="col" class="px-6 py-3">
                    image
                </th>
                <th scope="col" class="px-6 py-3">
                    price
                </th>
                <th scope="col" class="px-6 py-3">
                    category
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in productList" :key="product.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ product.title }}
                </th>
                <td class="px-6 py-4">
                    {{ product.description }}
                </td>
                <td class="px-6 py-4">
                    {{ product.id }}
                </td>
                <td class="px-6 py-4">
                    <img :src="product.image" alt="">
                </td>
                <td class="px-6 py-4">
                    {{ product.price }}
                </td>
                <td class="px-6 py-4">
                    {{ product.category }}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<style scoped>
    
</style>