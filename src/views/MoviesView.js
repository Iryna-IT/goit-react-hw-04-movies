import React, { Component } from 'react';

import Searchbar from '../components/Searchbar';
import Load from '../components/Loader';
import Button from '../components/Button';
import MovieList from '../components/MovieList';

import getMovies from '../services/getMovies';
import getLocalStorage from '../functions/getLocalStorage';

class MoviesView extends Component {
  state = {
    movies: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const stateInLocalStorage = getLocalStorage('savedState');
    if (
      stateInLocalStorage !== undefined &&
      stateInLocalStorage.searchQuery !== this.state.searchQuery
    ) {
      this.setState({
        searchQuery: stateInLocalStorage.searchQuery,
        currentPage: stateInLocalStorage.currentPage - 1,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchMovies();
    }
    localStorage.setItem(`savedState`, JSON.stringify(this.state));
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      movies: [],
    });
  };

  searchMovies = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { query: searchQuery, page: currentPage };
    this.setState({ isLoading: true });

    getMovies(options)
      .then(movies => {
        this.setState(prevState => ({
          // movies: [...prevState.movies, ...movies],
          movies: [...movies],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, isLoading } = this.state;
    const { genresList } = this.props;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <MovieList movies={movies} genresList={genresList} />
        {isLoading && <Load />}
        {movies.length > 19 && !isLoading && (
          <Button onClick={this.searchMovies} />
        )}
      </>
    );
  }
}

export default MoviesView;
