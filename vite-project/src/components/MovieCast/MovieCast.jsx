import {useParams} from "react-router-dom";
import {getCast, getMovieById} from "../../services/api.js";
import {useEffect, useState} from "react";
import MovieCastItem from "./MovieCastItem.jsx";

const MovieCast = () => {
    const {movieId} = useParams()
    const [cast, setCast] = useState(null)

    useEffect(()=>{

        try{
            const getCastData = async() =>{
                const {cast} = await getCast(movieId)
                setCast(cast.slice(0, 20))
            }

            getCastData()
        }catch(error){
            console.log(error.message)
        }
    }, [])
    return (
        <>
            {cast && <MovieCastItem cast={cast}/>}
        </>
    );
};

export default MovieCast;