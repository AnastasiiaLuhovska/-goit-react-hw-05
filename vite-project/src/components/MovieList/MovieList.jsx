import MovieItem from "../MovieItem/MovieItem.jsx";
import s from './MovieList.module.css'

const MovieList = ({movies}) => {

    return (
        <ul className={s.list}>
            {movies.map(movie => <MovieItem key={movie.id} movie={movie}/>)}
        </ul>
    );
};

export default MovieList;