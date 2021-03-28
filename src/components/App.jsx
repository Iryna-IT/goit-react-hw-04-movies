import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './AppBar';
import routes from '../routes';

import getGenres from '../services/getGenres';

// import Searchbar from '../components/Searchbar';

import styles from './App.module.css';
import NotFoundView from '../views/NotFoundView';

class App extends Component {
  state = {
    movies: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    genresList: [],
  };

  getGenresList() {
    const { genresList } = this.state;
    if (genresList.length === 0) {
      getGenres().then(allGenres => {
        this.setState({ genresList: allGenres.genres });
      });
    }
  }

  render() {
    this.getGenresList();
    const { genresList } = this.state;

    const HomeView = lazy(() =>
      import('../views/HomeView.js' /* webpackChunkName: "home-view" */),
    );

    const MoviesView = lazy(() =>
      import('../views/MoviesView.js' /* webpackChunkName: "movies-view" */),
    );

    const MovieDetailsView = lazy(() =>
      import(
        '../views/MovieDetailsView.js' /* webpackChunkName: "movie-details-view" */
      ),
    );
    return (
      <div className={styles.App}>
        <AppBar />

        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            {/* <Route exact path={routes.home} component={HomeView} /> */}
            <Route
              exact
              path={routes.home}
              render={props => <HomeView {...props} genresList={genresList} />}
            />
            <Route
              exact
              path={routes.movies}
              render={props => (
                <MoviesView {...props} genresList={genresList} />
              )}
            />
            <Route
              path={routes.movieDetails}
              render={props => (
                <MovieDetailsView {...props} genresList={genresList} />
              )}
            />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
