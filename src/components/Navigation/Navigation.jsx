import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLink
        exact
        to={routes.home}
        className={styles.NavigationLink}
        activeClassName={styles.Active}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={styles.NavigationLink}
        activeClassName={styles.Active}
        onClick={event => localStorage.clear()}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
