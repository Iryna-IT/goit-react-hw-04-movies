import React, { Component } from 'react';

import Load from '../components/Loader';
import Button from '../components/Button';
import MovieList from '../components/MovieList';
import getTrends from '../services/getTrends';
import getLocalStorage from '../functions/getLocalStorage';

class HomeView extends Component {
  state = {
    trends: [],
    currentPage: 1,
    totalPages: 1,
    error: null,
  };

  componentDidMount() {
    this.fetchTrends();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const stateInLocalStorage = getLocalStorage('savedState');
  //   if (prevState.currentPage !== stateInLocalStorage.currentPage) {
  //     this.fetchTrends();
  //   }
  // }

  fetchTrends = () => {
    const { currentPage } = this.state;
    getTrends(currentPage)
      .then(trends => {
        this.setState(prevState => ({
          trends: [...prevState.trends, ...trends.results],
          totalPages: trends.total_pages,
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error: error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  loadMore = () => {
    this.fetchTrends();
    localStorage.setItem(`savedState`, JSON.stringify(this.state));
  };

  render() {
    const { trends, isLoading, currentPage, totalPages } = this.state;
    const { genresList } = this.props;
    // console.log(trends);
    return (
      <div className="HomeView">
        <h1 className="HomeView-title">Trending today</h1>
        {trends.length > 0 ? (
          <MovieList movies={trends} genresList={genresList} />
        ) : null}
        {isLoading && <Load />}
        {totalPages > 1 && currentPage < totalPages && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}

export default HomeView;
