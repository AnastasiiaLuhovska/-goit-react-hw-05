import {useEffect, useState} from "react";
import {getFilmsByQuery, getTrandingFilms} from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage.jsx";
import {useSearchParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";

const MoviesPage = () => {

    const [filmsByQuery, setFilmsByQuery] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const query = searchParams.get('query')

    const handleSubmit = (e) =>{
        e.preventDefault()
        setSearchParams({query: e.target.elements[0].value})
    }

    useEffect(()=>{
        if(!query) return

        setIsLoading(true)

        const getData = async() =>{
            try{
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
        <>
        <form onSubmit={handleSubmit}>
            <input/>
            <button type='submit'>Search</button>
        </form>
            {isLoading && <Loader/>}
            {filmsByQuery.length === 0 && query && !isLoading ?  <h2>We couldn't find anything</h2> : <MovieList movies={filmsByQuery}/>}
            {error && <NotFoundPage error={error}/>}
            </>
    );
};

export default MoviesPage;