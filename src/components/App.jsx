import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { getLogedInUser, allStorage } from "../storageActions";

const App = () => {
  const [user, setUser] = useState(getLogedInUser());
  const [allUsers, setAllUsers] = useState(allStorage());
  const navigate = useNavigate();
  const isAuthUser = !!getLogedInUser();

  useEffect(() => {
    console.log(user);
    setAllUsers(allStorage());
  }, [user]);

  return (
    <Routes>
      <Route exact path="/" element={<Navbar isAuthUser={isAuthUser} />}>
        <Route index={true} path="home" element={<LandingPage />}></Route>
        <Route path="movies" element={<SearchBar />}>
          <Route path="latest" element={<LatestMovies />}></Route>
          <Route path="upcoming" element={<UpcomingMovies />}></Route>
          <Route path="top_rated" element={<TopRatedMovies />}></Route>
          <Route path="popular" element={<PopularMovies />}></Route>
        </Route>
        <Route exact path="/movies/:id" element={<MovieDetails />}></Route>
        <Route
          path="/auth"
          element={<ProtectedRoute isAuthUser={isAuthUser} setUser={setUser} />}
        >
          <Route path="account" element={<Account user={user} />}></Route>
          <Route
            path="logout"
            element={<LogoutForm user={user} setUser={setUser} />}
          ></Route>
        </Route>
        <Route path="/auth" element={<PublicRoute isAuthUser={isAuthUser} />}>
          <Route
            path="login"
            element={<LoginForm storageUsers={allUsers} setUser={setUser} />}
          ></Route>
          <Route
            path="signup"
            element={<SignUpForm storageUsers={allUsers} setUser={setUser} />}
          ></Route>
          <Route path="*" exact={true} element={<GenericNotFound />} />
        </Route>
        <Route path="*" exact={true} element={<GenericNotFound />} />
        <Route path="404" element={<GenericNotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
