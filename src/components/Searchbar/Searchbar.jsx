import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';
// import { v4 as uuidv4 } from 'uuid';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    // console.log(this.state.query);
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={styles.SearchFormButton}
            onSubmit={this.handleSubmit}
          >
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
