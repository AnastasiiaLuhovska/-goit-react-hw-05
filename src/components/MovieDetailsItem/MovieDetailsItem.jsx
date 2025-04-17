import s from "./MovieDetailsItem.module.css";

const MovieDetailsItem = ({movie}) => {
    const {poster_path, title, release_date,
        vote_average, overview, genres} = movie
    return (
        <div className={s.item}>
            <div>
                <img className={s.poster} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}/>
            </div>
            <div className={s.description}>
                <h2 >{title} ({release_date})</h2>
                <p className={s.text}>User Score: {Math.ceil(vote_average* 10)}%</p>
                <p className={s.text}>Overview: {overview}</p>
                <p className={s.text}>Genres: {(genres.map(genre=>genre.name).join(' '))}</p>
            </div>
        </div>
    );
};

export default MovieDetailsItem;