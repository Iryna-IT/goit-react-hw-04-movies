import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import styles from './MovieList.module.css';
import MovieItem from '../MovieItem';

class MovieList extends Component {
  static defaultProps = {
    genresList: [],
    movies: [],
  };

  static propTypes = {
    genresList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genresIds: PropTypes.array.isRequired,
      }),
    ),
  };

  render() {
    const { movies } = this.props;
    const { genresList } = this.props;
    // console.log(trends);
    // console.log(genresList);
    return (
      <ul className={styles.MovieList}>
        {movies.map(item => (
          <MovieItem
            key={item.id}
            id={item.id}
            title={item.title}
            release={item.release_date}
            poster={item.poster_path}
            genresIds={item.genre_ids}
            genresList={genresList}
          />
        ))}
      </ul>
    );
  }
}

export default withRouter(MovieList);
