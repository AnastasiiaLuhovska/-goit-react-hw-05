import {useEffect, useState} from "react";
import {getFilmsByQuery, getTrandingFilms} from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage.jsx";
import {useSearchParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";
import s from './MoviesPage.module.css'

const MoviesPage = () => {

    const [filmsByQuery, setFilmsByQuery] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const query = searchParams.get('query')

    const handleSubmit = (e) =>{
        e.preventDefault()
        setSearchParams({query: e.target.elements[0].value})
    }

    useEffect(()=>{
        if(!query) return



        const getData = async() =>{
            try{
                setIsLoading(true)
                const {results} = await getFilmsByQuery(query)

                setFilmsByQuery(results)

            }catch(error){
                setError(error.message)
            }finally{
                setIsLoading(false)
            }
        }

        getData()

    }, [query])

    return (
        <div className={s.wrapper}>
        <form className={s.form} onSubmit={handleSubmit}>
            <input className={s.input}/>
            <button type='submit'>Search</button>
        </form>
            {isLoading && <Loader/>}
            {filmsByQuery.length === 0 && query && !isLoading ?  <h2>We couldn't find anything with name: {query}</h2> : <MovieList movies={filmsByQuery}/>}
            {error && <NotFoundPage error={error}/>}
            </div>
    );
};

export default MoviesPage;