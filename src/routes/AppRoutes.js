import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainHeader from '../components/Navigation/MainHeader';
import GameDetails from '../pages/GameDetails';

import Home from '../pages/Home';
import News from '../pages/News';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game/:gameId" component={GameDetails} />
        <Route path="/news" component={News} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
