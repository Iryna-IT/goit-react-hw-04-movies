import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './MovieList.module.css';
import MovieItem from '../MovieItem';

class MovieList extends Component {
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
