import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {getMovieById} from "../../services/api.js";
import MovieDetailsItem from "../../components/MovieDetailsItem/MovieDetailsItem.jsx";
import s from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)

    const {state} = useLocation()
    const goBackLink = useRef(state)

    useEffect(()=>{
        const getMovie = async() =>{
            const data = await getMovieById(movieId)
            setMovie(data)
        }

        getMovie()
    }, [])


    return (
        <>
            <Link to={goBackLink.current || '/'} className={s.button}>Go back</Link>
            {movie && <MovieDetailsItem movie={movie}/>}
            <div className={s.item}>
                <ul>Additional information:</ul>
                <Link  to={'cast'}>Cast</Link>
                <Link  to={'reviews'}>Reviews</Link>
            </div>
            <Outlet/>
        </>


    )
};

export default MovieDetailsPage;