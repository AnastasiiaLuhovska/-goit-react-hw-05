import MovieList from "../../components/MovieList/MovieList.jsx";
import {useEffect, useState} from "react";
import {getTrandingFilms} from "../../services/api.js";

const HomePage = () => {

    const [topFilms, setTopFilms] = useState(null)

    useEffect(()=>{
        const getData = async() =>{
            try{
                const {results} = await getTrandingFilms()

                setTopFilms(results)
            }catch(error){
                console.log(error.message)
            }
        }

        getData()

    }, [])

    return (
        <>
            {topFilms && <div>
                <MovieList movies={topFilms}/>
            </div>}
        </>

    );
};

export default HomePage;