import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalLayout from "../layouts/GlobalLayout";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import { AppContext, api } from "../context/AppContext";

import "../styles/index.css";

const App: React.FC = () => {
  return (
    <AppContext.Provider value={{ api }}>
      <GlobalLayout>
        <Router>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </GlobalLayout>
    </AppContext.Provider>
  );
};

export default App;
