import { HashRouter, Routes, Route } from "react-router-dom";
import { MoviePage } from "../features/movies/MoviePage";
import { MovieList } from "../features/movies/MovieList";
import { PeopleList } from "../features/people/PeopleList";
import { PeopleProfile } from "../features/people/PeopleProfile";
import { SearchResult } from "../features/SearchResult";
import { ErrorPage } from "../common/ErrorPage";
import Navigation from "../common/Navigation";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/peopleprofile/:id" element={<PeopleProfile />} />
        <Route path="/moviepage/:id" element={<MoviePage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};
