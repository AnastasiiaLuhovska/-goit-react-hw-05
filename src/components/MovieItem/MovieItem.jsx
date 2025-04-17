import s from './MovieItem.module.css'
import {Link, useLocation} from "react-router-dom";

const MovieItem = ({movie}) => {

    const location = useLocation()

    return (
        <li className={s.item}>
            <Link to={`/movies/${movie.id}`} state={location}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <p className={s.text}>{movie.title}</p>
            </Link>
        </li>
    );
};

export default MovieItem;