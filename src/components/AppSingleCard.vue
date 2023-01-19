<script>
import { store } from '../store.js';
export default {
    name: 'card',
    props: {
        info: Object
    },
    methods: {
        posterImage(value) {
            if (value.poster_path == null) {
                return `https://media1.giphy.com/media/l2Je0H39CPLlG4UkE/giphy.gif?cid=790b761182bdee294d3f61ca088c84a635302753fa72df73&rid=giphy.gif&ct=g`
            }
            else {
                return `https://image.tmdb.org/t/p/w342${value.poster_path}`
            }
        },
        calcStars() {
            return Math.round(this.info.vote_average / 2)
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
            <h4>{{ info.title }}</h4>
            <h4>{{ info.original_title }}</h4>
            <img :src="
                info.original_language == 'en'
                    ? `https://www.countryflagicons.com/FLAT/64/GB.png`
                    : info.original_language == 'ja'
                        ? `https://www.countryflagicons.com/FLAT/64/JP.png`
                        : info.original_language == 'ko'
                            ? `https://www.countryflagicons.com/FLAT/64/KR.png`
                            : `https://www.countryflagicons.com/FLAT/64/${info.original_language.toUpperCase()}.png`
            " :alt="info.original_language" />
            <p>
                <i v-for="n in calcStars()" :key="n" class="fa-solid fa-star"></i>
                <i v-for="n in 5 - calcStars()" :key="n" class="fa-regular fa-star"></i>

            </p>


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