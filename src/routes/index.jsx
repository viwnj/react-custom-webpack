import React from 'react';
import { Switch } from 'react-router-dom';
import RepoList from '../components/AddedRepos';
import Search from '../components/Search';
import Route from './GuestRoute';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={RepoList} />
      <Route exact path="/search" component={Search} />
    </Switch>
  );
}
