import { createRouter, createWebHistory } from 'vue-router'

import ProductList from '../components/crud/ProductList.vue'
import ProductCreate from '../components/crud/ProductCreate.vue'

const routes = [
    {
        path: '/',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/create',
        name: 'ProductCreate',
        component: ProductCreate
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router