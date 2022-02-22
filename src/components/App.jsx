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

import LoginForm from "./auth/LoginForm";
import Account from "./auth/Account";
import SignUpForm from "./auth/SignUpForm";
import GenericNotFound from "./GenericNotFound";
import ProtectedRoute from "./auth/ProtectedRoute";
import LogoutForm from "./auth/LogoutForm";
import PublicRoute from "./auth/PublicRoute";

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
        <Route path="/auth" element={<ProtectedRoute />}>
          <Route path="account" element={<Account />}></Route>
          <Route path="logout" element={<LogoutForm />}></Route>
        </Route>
        <Route path="/auth" element={<PublicRoute />}>
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="signup" element={<SignUpForm />}></Route>
        </Route>
        <Route path="*" exact={true} element={<GenericNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
