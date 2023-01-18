<script>

import AppSingleCard from './AppSingleCard.vue';
import { store } from '../store.js';
export default {
    components: {
        AppSingleCard
    },
    data() {
        return {
            store,
        }
    }

}
</script>
<template>
    <div class="container">
        <div class="card-cont">
            <AppSingleCard v-for="(item, index) in store.film" :key="index" :info="item" />
        </div>

    </div>
</template>
<style>

</style>