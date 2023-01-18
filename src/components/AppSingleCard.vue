<script>
import { store } from '../store.js';
export default {
    name: 'card',
    props: {
        info: Object
    },
    methods: {
        // title(value) {
        //     if (value.media_type == 'movie') {
        //         return `film: ${value.original_title}.`
        //     }
        //     else {
        //         return `no title`
        //     }
        // },
        posterImage(value) {
            return `https://image.tmdb.org/t/p/w342${value.poster_path}`
        }

    }
}
</script>
<template>
    <div class="card">
        <div class="card-img">
            <img :src="posterImage(info)" />
        </div>
        <div class="card-info">
            <h4>{{ info.original_title }}</h4>

        </div>

    </div>

</template>


<style>

</style>