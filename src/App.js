import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import LoginForm from './components/Form/LoginForm.component';
import RegisterForm from './components/Form/RegisterForm.component';
import ResetPassword from './components/Form/ResetPassword.component';
import Dashboard from './pages/Dashboard.pages';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={['/', '/login']} component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/forgot-password' component={ResetPassword} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
