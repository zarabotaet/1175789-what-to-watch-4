import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import Header from "../header/header.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ControlsBtnList from "../controls-btn-list/controls-btn-list.jsx";
import ShowMore from "../show-more/show-more.jsx";

const Main = (props) => {

  const {onMovieButtonClick, films, currentGenre, onFilterClick, authorizationStatus,
    currentMovie, showMoreClickHandler, showingFilmsCount, isVisible} = props;

  const {title, posterImage, genre, released} = currentMovie;

  return (
    <React.Fragment>
      <section className="movie-card">

        <Header
          films ={films}
          authorizationStatus = {authorizationStatus}
          currentMovie = {currentMovie}
        />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={title} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 onClick = {onMovieButtonClick} className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">

                <ControlsBtnList/>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            films = {films}
            currentGenre={currentGenre}
            onFilterClick = {onFilterClick}
          />

          <MoviesList
            showingFilmsCount = {showingFilmsCount}
          />

          {isVisible ?
            <ShowMore showMoreClickHandler = {showMoreClickHandler}/>
            : ``}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
    </React.Fragment>
  );
};

Main.propTypes = {
  movieInfo: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.number.isRequired,
    TITLE: PropTypes.string.isRequired,
  }),
  onMovieButtonClick: PropTypes.func,
  filmsByGenre: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
  activeFilm: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  addListClick: PropTypes.func.isRequired,
  removeListClick: PropTypes.func.isRequired,
  currentMovie: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    posterImage: PropTypes.string,
  }),
  showMoreClickHandler: PropTypes.func.isRequired,
  showingFilmsCount: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Main;
