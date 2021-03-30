import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import styles from './MovieReviews.module.css';

import Load from '../Loader';
import Button from '../Button';
import getMovieReviews from '../../services/getMovieReviews';

class MovieReviews extends Component {
  state = {
    reviews: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
  };

  static propTypes = {
    movieId: PropTypes.string.isRequired,
  };

  async componentDidMount() {
    await this.fetchMovieReviews();
  }

  fetchMovieReviews = () => {
    const { currentPage } = this.state;
    const { movieId } = this.props;

    const options = { id: movieId, page: currentPage };
    this.setState({ isLoading: true });

    getMovieReviews(options)
      .then(reviews => {
        this.setState(prevState => ({
          reviews: [...prevState.reviews, ...reviews.results],
          totalPages: reviews.total_pages,
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { reviews, isLoading, totalPages, currentPage } = this.state;
    console.log(totalPages);

    return reviews.length > 0 ? (
      <>
        <ul className={styles.movieReviewsList}>
          {reviews.map(item => (
            <li key={item.id} className={styles.movieReviewsItem}>
              <span
                className={styles.movieReviewsItemAuthor}
              >{` ${item.author}:`}</span>
              <p className={styles.movieReviewsItemContent}>
                {`"${item.content}"`}
              </p>
            </li>
          ))}
        </ul>
        {isLoading && <Load />}
        {totalPages > 1 && currentPage < totalPages && !isLoading && (
          <Button onClick={this.fetchMovieReview} />
        )}
      </>
    ) : (
      <div>There is no any review on this movie</div>
    );
  }
}

export default withRouter(MovieReviews);
