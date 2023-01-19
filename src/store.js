import { reactive } from 'vue'

export const store = reactive({
    urlFilm: "https://api.themoviedb.org/3/search/movie?api_key=21d4090418c82346bc75a523dc565cc0&language=en-US&query=",
    urlSerie: "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=en-US&query=",
    flagApi: 'https://countryflagsapi.com/png/ae',
    film: [],
    serie: [],
})