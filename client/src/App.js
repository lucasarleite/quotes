import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Add from './views/Add/Add';
import Home from './views/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;