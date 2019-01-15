import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { apolloClient } from './apollo';
import './App.css';


const IndexView = () => (
  <div>
    index
  </div>
);

const LoginView = () => (
  <div>
    login
  </div>
);


class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={IndexView}/>
              <Route path="/login" exact component={LoginView}/>
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}


export default App;
