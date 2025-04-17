import MovieList from "../../components/MovieList/MovieList.jsx";
import {useEffect, useState} from "react";
import {getTrandingFilms} from "../../services/api.js";
import Loader from "../../components/Loader/Loader.jsx";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage.jsx";

const HomePage = () => {

    const [topFilms, setTopFilms] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{

        const getData = async() =>{
            try{
                setIsLoading(true)
                const {results} = await getTrandingFilms()

                setTopFilms(results)
            }catch(error){
                setError(error.message)
            }finally{
                setIsLoading(false)
            }
        }

        getData()

    }, [])

    return (
        <>
            {topFilms && <div>
                <MovieList movies={topFilms}/>
            </div>}
            {isLoading && <Loader/>}
            {error && <NotFoundPage error={error}/>}

        </>

    );
};

export default HomePage;