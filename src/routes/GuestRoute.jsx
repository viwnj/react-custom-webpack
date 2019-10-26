import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../components/common/Header';

export default function GuestRoute({ exact, path, component: Component }) {
  return (
    <>
      <Header />
      <Route exact={exact} path={path} component={Component} />
    </>
  );
}

GuestRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
