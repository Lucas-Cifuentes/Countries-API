import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./views/Home"
import Details from "./views/Details"
import Header from "./components/layout/Header";

const App = () => (
    <Router>
      <Header />
      <Provider store={store} >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:country" component={Details} />
      </Switch>
      </Provider>
    </Router>
  )

export default App;
