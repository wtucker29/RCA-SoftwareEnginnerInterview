import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import NewUserPage from './components/NewUserPage';
import SuccessPage from './components/SuccessPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path="/new-user">
          <NewUserPage />
        </Route>
        <Route path="/success">
          {isAuthenticated ? <SuccessPage /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;