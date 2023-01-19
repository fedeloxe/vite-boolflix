<script>

import AppSingleCard from './AppSingleCard.vue';
import AppSingleCardSerie from './AppSingleCardSerie.vue';
import { store } from '../store.js';
export default {
    components: {
        AppSingleCard,
        AppSingleCardSerie
    },
    data() {
        return {
            store,
        }
    }

}
</script>
<template>
    <main>

        <h3>Film:</h3>
        <div class="card-cont-film">
            <AppSingleCard v-for="(item, index) in store.film" :key="index" :info="item" />
        </div>
        <h3>Serie:</h3>
        <div class="card-cont-serie">
            <AppSingleCardSerie v-for="(item, index) in store.serie" :key="index" :infoSerie="item" />

        </div>



    </main>
</template>
<style lang="scss" scoped>
@use '../styles/partials/mixins' as*;

main {
    padding-top: 20px;
    height: 90%;
    background-color: $black;

    h3 {
        color: white;
    }




    .card-cont-film {
        display: flex;
        overflow-x: auto;
    }

    .card-cont-serie {
        display: flex;
        overflow-x: auto;
    }


}
</style>