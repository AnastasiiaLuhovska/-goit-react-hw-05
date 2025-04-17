import s from './MovieCast.module.css'

const MovieCastItem = ({cast}) => {

    return (
        <ul className={s.list}>
            {cast.map(actor => <li className={s.item} key ={actor.credit_id}>
                <img className={s.poster} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.character}/>
                <p>{actor.character}</p>
            </li>)}
        </ul>
    );
};

export default MovieCastItem;