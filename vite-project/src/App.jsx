import {Suspense, lazy} from "react";
import './App.css'
import Navigation from "./components/Navigation/Navigation.jsx";
import {Route, Routes, useSearchParams} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Loader from "./components/Loader/Loader.jsx";
const MoviesPage = lazy(()=> import("./pages/MoviesPage/MoviesPage.jsx"))
const MovieDetailsPage = lazy(()=> import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"))
const MovieCast = lazy(()=> import("./components/MovieCast/MovieCast.jsx"))
const MovieReviews = lazy(()=> import("./components/MovieReviews/MovieReviews.jsx"))


function App() {


  return (
    <>
      <header><Navigation/></header>
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path={'/movies/:movieId'} element={<MovieDetailsPage/>}>
                    <Route path={'cast'} element={<MovieCast/>}/>
                    <Route path={'reviews'} element={<MovieReviews/>}/>
                </Route>
                <Route path='/movies' element={<MoviesPage/>}></Route>
            </Routes>
        </Suspense>

    </>
  )
}

export default App
