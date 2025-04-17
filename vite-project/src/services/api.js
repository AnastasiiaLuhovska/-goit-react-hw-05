import axios from "axios";
const API_KEY = '0e5198b88df1717973d048f63432a69d'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {

        Accept: 'application/json'
    },
    params: {
        api_key: API_KEY
    }
})

export const getTrandingFilms = async() =>{
    const {data} = await instance.get('trending/movie/week')
    return data
}

export const getMovieById = async(movieId) =>{
    const {data} = await instance.get(`/movie/${movieId}`)

    return data
}

export const getCast = async(movieId) =>{
    const {data} = await instance.get(`/movie/${movieId}/credits`)

    return data
}

export const getReviews = async(movieId) =>{
    const {data} = await instance.get(`/movie/${movieId}/reviews`)

    return data
}


export const getFilmsByQuery = async(query) =>{
    const {data} = await instance.get('/search/movie', {
        params:{
            query: query
        }
    })
    return data
}
