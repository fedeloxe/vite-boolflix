import { reactive } from 'vue'

export const store = reactive({
    url: "https://api.themoviedb.org/3/search/movie?api_key=21d4090418c82346bc75a523dc565cc0&language=it-IT&query=",
    film: [],
})