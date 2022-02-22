import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import "./../css/default.css";
import LandingPage from "./LandingPage";
import MovieDetails from "./movies/MovieDetails";
import LatestMovies from "./movies/LatestMovies";
import UpcomingMovies from "./movies/UpcomingMovies";
import PopularMovies from "./movies/PopularMovies";
import TopRatedMovies from "./movies/TopRatedMovies";

import SearchBar from "./SearchBar";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navbar />}>
        <Route path="home" element={<LandingPage />}></Route>
        <Route path="/movies" element={<SearchBar />}>
          <Route path="latest" element={<LatestMovies />}></Route>
          <Route path="upcoming" element={<UpcomingMovies />}></Route>
          <Route path="best-rated" element={<TopRatedMovies />}></Route>
          <Route path="popular" element={<PopularMovies />}></Route>
        </Route>
        <Route exact path="/movies/:id" element={<MovieDetails />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
