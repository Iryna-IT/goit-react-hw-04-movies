import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import styles from './MoviePreview.module.css';

class MoviePreview extends Component {
  static defaultProps = {
    title: '',
    release: '',
    poster: '',
    genres: '',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
  };

  render() {
    const { poster, title, genres, release } = this.props;
    return (
      <>
        <img
          className={styles.filmsGalleryItemPoster}
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
        />
        <p className={styles.filmsGalleryItemTitle}>
          {title.toUpperCase()} {release && `(${release.split('-')[0]})`}
        </p>
        <p className={styles.filmsGalleryItemGenres}>{genres}</p>
      </>
    );
  }
}

export default withRouter(MoviePreview);
