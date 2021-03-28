import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './MovieCast.module.css';
import getMovieCast from '../../services/getMovieCast';

class MovieCast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { movieId } = this.props;
    const cast = await getMovieCast(movieId);
    this.setState({ cast: cast });
  }

  render() {
    console.log(this.state);
    const { cast } = this.state;
    // console.log(cast);

    return (
      <ul className={styles.movieCastList}>
        {cast.map(item => (
          <li key={item.cast_id} className={styles.movieCastItem}>
            <h2 className={styles.movieCastItemName}>{item.original_name}</h2>
            <img
              className={styles.movieCastItemProfile}
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.original_name}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(MovieCast);
