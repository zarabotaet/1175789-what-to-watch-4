import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllFilms, getCurrentMovie} from "../../selectors.js";
import {ActionCreator as FilmsReducerAC} from "../../reducer/films-by-genre/films-by-genre.js";

const ControlsBtnList = (props) => {
  const {films, addListClick, removeListClick} = props;

  const addListHandler = () => {
    addListClick(currentId);
  };

  const removeListHandler = () => {
    removeListClick(currentId);
  };

  let isListed;

  const currentId = 3;

  const currentFilm = films.filter((film)=> film.id === currentId)[0];

  if (currentFilm) {
    isListed = currentFilm.isFavorite;
  }

  return (
    <>
      <button className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>


    {isListed ?
      <button onClick={removeListHandler} className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
      :
      <button onClick={addListHandler} className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>}
    </>
  );
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  addListClick(currentId) {
    dispatch(FilmsReducerAC.addWatchList(currentId));
  },

  removeListClick(currentId) {
    dispatch(FilmsReducerAC.removeWatchList(currentId));
  },

});

ControlsBtnList.propTypes = {
  films: PropTypes.array.isRequired,
  addListClick: PropTypes.func.isRequired,
  removeListClick: PropTypes.func.isRequired,
};

export {ControlsBtnList};
export default connect(mapStateToProps, mapDispatchToProps)(ControlsBtnList);
