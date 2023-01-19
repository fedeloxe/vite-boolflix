<script>
import { store } from '../store.js';
export default {
    name: 'card',
    props: {
        infoSerie: Object,
    },
    methods: {
        posterImage(value) {
            if (value.poster_path == null) {
                return `https://media0.giphy.com/media/dzoRHDPScwgiA/giphy.gif?cid=790b761135a5e4136f832b474ace5ac46e7b9a286ad5b0ce&rid=giphy.gif&ct=g`


            }
            else {
                return `https://image.tmdb.org/t/p/w342${value.poster_path}`

            }
        }

    }
}
</script>
<template>
    <div class="card">
        <div class="card-img">
            <img :src="posterImage(infoSerie)" />
        </div>
        <div class="card-info">
            <h4>{{ infoSerie.name }}</h4>
            <h4>{{ infoSerie.original_name }}</h4>
            <img :src="
                infoSerie.original_language == 'en'
                    ? `https://www.countryflagicons.com/FLAT/64/GB.png`
                    : infoSerie.original_language == 'ja'
                        ? `https://www.countryflagicons.com/FLAT/64/JP.png`
                        : infoSerie.original_language == 'ko'
                            ? `https://www.countryflagicons.com/FLAT/64/KR.png`
                            : `https://www.countryflagicons.com/FLAT/64/${infoSerie.original_language.toUpperCase()}.png`
            " :alt="infoSerie.original_language" />


        </div>

    </div>

</template>
<style lang="scss" scoped>
.card {
    min-width: calc(100% / 5 - 20px);
    margin: 0 20px;
    background-color: black;


    .card-img {

        img {
            width: 100%;
        }
    }
}
</style>