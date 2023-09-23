<script setup>
    import ProductList from './components/crud/ProductList.vue';
</script>

<template>

    <RouterView />
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <RouterLink to="/">Product List</RouterLink>
                <RouterLink to="/create">Create Product</RouterLink>
            </div>
        </div>
    </div>


</template>
<style scoped>

</style>
