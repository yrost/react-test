import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Characters from './pages/Characters/Characters';
import Character from './pages/Characters/Character';

import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/episodes" component={Episodes}>
          </Route>
          <Route path="/characters" component={Characters}>
          </Route>
          <Route path="/character/:id" component={Character}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
