import {useEffect, useState} from 'react'
import './App.css'
import Navigation from "./components/Navigation/Navigation.jsx";
import {Route, Routes, useSearchParams} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import {getTrandingFilms} from "./services/api.js";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieCast from "./components/MovieCast/MovieCast.jsx";
import MovieReviews from "./components/MovieReviews/MovieReviews.jsx";

function App() {


  return (
    <>
      <header><Navigation/></header>

        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path={'/movies/:movieId'} element={<MovieDetailsPage/>}>
                <Route path={'cast'} element={<MovieCast/>}/>
                <Route path={'reviews'} element={<MovieReviews/>}/>
            </Route>
            <Route path='/movies' element={<MoviesPage/>}></Route>
        </Routes>
    </>
  )
}

export default App
