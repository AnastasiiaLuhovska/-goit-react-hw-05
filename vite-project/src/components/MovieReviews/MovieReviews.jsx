import {useParams} from "react-router-dom";
import {getReviews} from "../../services/api.js";
import {useEffect, useState} from "react";
import s from './MovieReviews.module.css'

const MovieReviews = () => {

    const {movieId} = useParams()

    const [reviews, setReviews] = useState(null)

    useEffect(()=>{
        try{
            const getReviewsdata = async() =>{
                const {results} = await getReviews(movieId)
                setReviews(results)
            }
            getReviewsdata()
        }catch(error){
            console.log(error.message)
        }
    }, [])


    return (
        <>
            {reviews &&      <ul className={s.list}>
                {reviews.map(review =>
                    <li className={s.item} key={review.id}>
                        <p className={s.p}>{review.author}</p>
                        <p>{review.content}</p>
                        <p>{review.updated_at}</p>
                    </li>)}
            </ul>}
        </>

    );
};

export default MovieReviews;