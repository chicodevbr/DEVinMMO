import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import MainHeader from '../components/Navigation/MainHeader';
import AllGames from '../pages/AllGames';
import GameDetails from '../pages/GameDetails';
import GamesByPopularity from '../pages/GamesByPopularity';

import Home from '../pages/Home';
import News from '../pages/News';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game/:gameId" component={GameDetails} />
        <Route path="/games" component={AllGames} />
        <Route path="/news" component={News} />
        <Route path="/popularity" component={GamesByPopularity} />
        <Route path="/hero" component={Hero} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
