import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import ControlsBtnList from "../controls-btn-list/controls-btn-list.jsx";

const MoviePage = (props) => {
  const {films, currentMovie, authorizationStatus} = props;

  const {title, posterImage, genre, released} = currentMovie;

  const showSimilar = `similar`;

  return (
  <>
  <section className="movie-card movie-card--full">
    <div className="movie-card__hero">

      <Header
        films ={films}
        authorizationStatus = {authorizationStatus}
        currentMovie = {currentMovie}
      />

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{released}</span>
          </p>

          <div className="movie-card__buttons">

            <ControlsBtnList />

            <a href="add-review.html" className="btn movie-card__button">Add review</a>

          </div>
        </div>
      </div>
    </div>

    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>

        <Tabs/>

      </div>
    </div>
  </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MoviesList showSimilar = {showSimilar}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>);
};

MoviePage.propTypes = {
  films: PropTypes.array.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  currentMovie: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    posterImage: PropTypes.string,
  }),
};

export default MoviePage;
