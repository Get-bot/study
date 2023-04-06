import React from 'react';
import MainNavigation from '../compontent/MainNavigation';
import classes from './Error.module.css';

const ErrorPage = () => {
  return (
    <div>
      <MainNavigation/>
      <main className={classes.content}>
        <h1>Page not found</h1>
      </main>
    </div>
  );
};

export default ErrorPage;