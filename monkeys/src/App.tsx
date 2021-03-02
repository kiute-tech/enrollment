import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import logo from './logo.svg';

import Header from './components/header';
import Home from './pages/home';
import Babouin from './pages/babouin';
import Macaque from './pages/macaque';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route path="/macaque">
                <Macaque />
            </Route>
            <Route path="/babouin">
                <Babouin />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
