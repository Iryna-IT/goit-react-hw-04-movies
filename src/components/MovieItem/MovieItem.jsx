import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './MovieItem.module.css';

import MoviePreview from '../MoviePreview';
import decodeGenres from '../../functions/decodeGenres';

class MovieItem extends Component {
  static defaultProps = {
    genresList: [],
    id: '',
    title: '',
    release: '',
    poster: '',
    genresIds: '',
  };

  static propTypes = {
    genresList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genresIds: PropTypes.array.isRequired,
  };

  render() {
    const { id, poster, title, genresIds, release, genresList } = this.props;
    const genres = decodeGenres(genresIds, genresList);

    return (
      <li key={id} className={styles.MovieItem}>
        <NavLink
          to={{
            pathname: `/movies/${id}`,
            state: { from: this.props.location },
          }}
        >
          <MoviePreview
            poster={poster}
            title={title}
            genres={genres}
            release={release}
          />
        </NavLink>
      </li>
    );
  }
}

export default withRouter(MovieItem);
