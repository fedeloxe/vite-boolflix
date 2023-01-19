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
        },
        calcStars() {
            return Math.round(this.infoSerie.vote_average / 2)
        }

    }
}
</script>
<template>
    <div class="wrapper">
        <div class="card">
            <img class="poster" :src="posterImage(infoSerie)" /> <!--poster-->
            <div class="info"> <!--info -->
                <h5>{{ infoSerie.name }}</h5> <!--title-->
                <h5>{{ infoSerie.original_name }}</h5> <!--original title-->
                <!--star-->
                <img class="flag" :src="
                    infoSerie.original_language == 'en'
                        ? `https://www.countryflagicons.com/FLAT/64/GB.png`
                        : infoSerie.original_language == 'ja'
                            ? `https://www.countryflagicons.com/FLAT/64/JP.png`
                            : infoSerie.original_language == 'ko'
                                ? `https://www.countryflagicons.com/FLAT/64/KR.png`
                                : `https://www.countryflagicons.com/FLAT/64/${infoSerie.original_language.toUpperCase()}.png`
                " :alt="infoSerie.original_language" />
                <p> <!--star-->
                    <i v-for="n in calcStars()" :key="n" class="fa-solid fa-star"></i>
                    <i v-for="n in 5 - calcStars()" :key="n" class="fa-regular fa-star"></i>
                </p>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
}




.wrapper {
    display: flex;
    width: 90%;
    justify-content: space-around;
}

.card {
    width: 280px;
    height: 360px;
    border-radius: 15px;
    padding: 1.5rem;
    background: white;
    position: relative;
    display: flex;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
    margin: 10px;
}

.card:hover {
    transform: translateY(20px);
}

.card:hover:before {
    opacity: 1;
}

.card:hover .info {
    opacity: 1;
    transform: translateY(0px);
}

.card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
}

.card .poster {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
}

.card .info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
}

.card .info h1 {
    margin: 0px;
}

.card .info p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
}

.card .info button {
    padding: 0.6rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
}

.card .info button:hover {
    background: dodgerblue;
    color: white;
}
</style>