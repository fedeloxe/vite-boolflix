<script>
import AppSearch from './AppSearch.vue';
import { store } from '../store.js'
import axios from 'axios';
export default {
    components: {
        AppSearch,
    },
    data() {
        return {
            store,
        }
    },
    // created() {
    //     this.searchAll()
    // },
    methods: {
        searchAll() {
            let urlFilm = store.urlFilm + store.inputText;
            axios.get(urlFilm).then((response) => {
                store.film = response.data.results
            });
            let urlSerie = store.urlSerie + store.inputText;
            axios.get(urlSerie).then((response) => {
                store.serie = response.data.results
            });
        }
    }

}
</script>
<template>
    <header>
        <div class="logo">
            <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="netflix-logo">
        </div>
        <div class="search">
            <AppSearch @search="searchAll" />
            <a href=""><i class="fa-solid fa-user-large"></i></a>

        </div>
    </header>

</template>


<style lang="scss" scoped>
header {
    height: 15vh;

    display: flex;
    justify-content: space-between;
    background-color: #1b1b1b;
    padding: 20px;

    .search {
        display: flex;
        align-items: center;
        font-size: 50px;

        a {
            color: white;
        }
    }
}
</style>