import {useParams} from "react-router-dom";
import {getCast, getMovieById} from "../../services/api.js";
import {useEffect, useState} from "react";
import MovieCastItem from "./MovieCastItem.jsx";
import Loader from "../Loader/Loader.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";

const MovieCast = () => {
    const {movieId} = useParams()
    const [cast, setCast] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        try{
            setIsLoading(true)
            const getCastData = async() =>{
                const {cast} = await getCast(movieId)
                setCast(cast.slice(0, 20))
            }

            getCastData()
        }catch(error){
            setError(error.message)
        }finally{
            setIsLoading(false)
        }
    }, [])
    return (
        <>
            {cast.length === 0 && !isLoading ? <h2>We couldn't find anything</h2>: <MovieCastItem cast={cast}/>}
            {error && <NotFoundPage error={error}/>}
            {isLoading && <Loader/>}
        </>
    );
};

export default MovieCast;