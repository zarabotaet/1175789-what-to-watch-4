import React from "react";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {AppRoutes} from "../../const.js";
import PropTypes from "prop-types";

const Header = (props) => {
  const {films, authorizationStatus, currentMovie} = props;

  const {title, backgroundImage} = films[currentMovie - 1];
  return (
    <>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="user-block">

          {authorizationStatus === AuthorizationStatus.AUTH ?
            <Link to = {AppRoutes.MY_LIST} >
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </Link>
            :
            <Link to = {AppRoutes.LOGIN} className="user-block__link">Sign in</Link>
          }
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
  })),


  authorizationStatus: PropTypes.string.isRequired,
  currentMovie: PropTypes.number.isRequired,
};

export default Header;
