import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

import styles from '../views/views.module.css';

import routes from '../routes';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';
import getMovieDetails from '../services/getMovieDetails';
import cutGenres from '../functions/cutGenres';

class MovieDetailsView extends Component {
  state = {
    poster: '',
    title: '',
    release: '',
    userScores: 0,
    overview: '',
    genres: [],
  };

  static defaultProps = {
    genres: [],
  };

  static propTypes = {
    movieId: PropTypes.string.isRequired,
    genres: PropTypes.array,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await getMovieDetails(movieId).then(movieDetails => {
      // console.log(movieDetails);

      const {
        poster_path,
        title,
        release_date,
        overview,
        genres,
        vote_average,
      } = movieDetails;

      this.setState({
        poster: poster_path,
        title,
        release: release_date.split('-')[0],
        overview,
        genres: cutGenres(genres),
        userScores: vote_average * 10,
      });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    //     if (location.state && location.state.from) {
    //       return history.push(location.state.from);
    //  }
    // history.push(routes.movies);
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { poster, title, release, userScores, overview, genres } = this.state;
    const { movieId } = this.props.match.params;

    return (
      <>
        <button
          type="button"
          className={styles.buttonGoBack}
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <div className={styles.movieMainInfo}>
          <img
            className={styles.moviePoster}
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title}
          />
          <div className={styles.movieInfo}>
            <h2 className={styles.title}>
              {title}
              <span className={styles.movieInfoRelease}>
                {release && ` (${release.split('-')[0]})`}
              </span>
            </h2>
            <p className={styles.movieInfoHeading}>
              User scores:
              <span
                className={styles.movieInfoHeadingValue}
              >{` ${userScores}%`}</span>
            </p>
            <p className={styles.movieInfoHeading}>
              Genres:
              <span
                className={styles.movieInfoHeadingValue}
              >{` ${genres}`}</span>
            </p>

            <p className={styles.movieInfoHeading}>
              Overview:
              <span
                className={styles.movieInfoHeadingValue}
              >{` ${overview}`}</span>
            </p>
          </div>
        </div>

        <div className={styles.movieInfoAditionanal}>
          Aditional information
          <p>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/cast`,
                state: { from: this.props.location },
              }}
              className={styles.movieInfoAditionanalHeading}
              activeClassName={styles.active}
            >
              Cast
            </NavLink>
          </p>
          <Route
            path={`${routes.movieDetails}/cast`}
            render={props => <MovieCast {...props} movieId={movieId} />}
          />
          <p>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/reviews`,
                state: { from: this.props.location },
              }}
              className={styles.movieInfoAditionanalHeading}
              activeClassName={styles.active}
            >
              Reviews
            </NavLink>
          </p>
          <Route
            path={`${routes.movieDetails}/reviews`}
            render={props => <MovieReviews {...props} movieId={movieId} />}
          />
        </div>
      </>
    );
  }
}

export default MovieDetailsView;
