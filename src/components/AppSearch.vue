<script>
import { store } from '../store';
import axios from 'axios';
export default {

    data() {
        return {
            store,
            inputText: '',
        }
    },
    methods: {
        search(input) {
            let urlFilm = store.urlFilm + input;
            axios.get(urlFilm).then((response) => {
                store.film = response.data.results
            });
            let urlSerie = store.urlSerie + input;
            axios.get(urlSerie).then((response) => {
                store.serie = response.data.results
            });
        }
    }
}
</script>
<template>

    <body>
        <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="searchbar">
                    <input class="search_input" type="text" name="" placeholder="Search..." id="search"
                        aria-label="Ricerca il film" v-model="inputText" @keyup.enter="search(inputText)">
                    <button href="#" class="search_icon" @click="search(inputText)"><i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </body>


</template>
<style lang="scss" scoped>
@use '../styles/partials/mixins' as*;

body,
html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: $black !important;
}

.searchbar {
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
}

.search_input {
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color: transparent;
    line-height: 40px;
    transition: width 0.4s linear;
}

.searchbar:hover>.search_input {
    padding: 0 10px;
    width: 450px;
    caret-color: red;
    transition: width 0.4s linear;
}

.searchbar:hover>.search_icon {
    background: white;
    color: #e74c3c;
}

.search_icon {
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #e74c3c;
    text-decoration: none;
}
</style>