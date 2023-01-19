<script>
import AppLoader from './AppLoader.vue';
import AppSingleCard from './AppSingleCard.vue';
import AppSingleCardSerie from './AppSingleCardSerie.vue';
import { store } from '../store.js';
export default {
    components: {
        AppSingleCard,
        AppSingleCardSerie,
        AppLoader
    },
    data() {
        return {
            store,
        }
    }

}
</script>
<template>
    <div v-if="store.loading">
        <AppLoader />
    </div>

    <div v-else>

        <main>


            <div class="card-cont-film">
                <AppSingleCard v-for="(item, index) in store.film" :key="index" :info="item" />
            </div>

            <div class="card-cont-serie">
                <AppSingleCardSerie v-for="(item, index) in store.serie" :key="index" :infoSerie="item" />

            </div>



        </main>

    </div>

</template>
<style lang="scss" scoped>
main {
    padding-top: 20px;
    height: 85vh;

    h3 {
        color: white;
    }

    .card-cont-film {
        display: flex;
        overflow-x: auto;
        height: 440px;
    }

    .card-cont-serie {
        margin-top: 10px;
        display: flex;
        overflow-x: auto;
        height: 440px
    }
}
</style>