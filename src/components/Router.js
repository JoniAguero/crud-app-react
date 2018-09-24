import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

export class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <div>
                <Header />
                <Navigation />
            </div>
            {/* <Route /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
