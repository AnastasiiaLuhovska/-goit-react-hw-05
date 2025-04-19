import {useParams} from "react-router-dom";
import {getReviews} from "../../services/api.js";
import {useEffect, useState} from "react";
import s from './MovieReviews.module.css'
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import Loader from "../Loader/Loader.jsx";

const MovieReviews = () => {

    const {movieId} = useParams()

    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        const getReviewsdata = async() => {
            try {
                setIsLoading(true)
                const {results} = await getReviews(movieId)
                setReviews(results)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
            getReviewsdata()
    }, [movieId])


    return (
        <>
            {reviews.length === 0 && !isLoading ?  <h2>We couldn't find any review</h2> :  <ul className={s.list}>
                {reviews.map(review =>
                    <li className={s.item} key={review.id}>
                        <p className={s.p}>{review.author}</p>
                        <p>{review.content}</p>
                        <p>{review.updated_at}</p>
                    </li>)}
            </ul>}

            {error && <NotFoundPage error={error}/>}
            {isLoading && <Loader/>}
        </>

    );
};

export default MovieReviews;