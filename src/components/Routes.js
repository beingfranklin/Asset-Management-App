import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CreateAsset from './pages/CreateAsset';
import CreateUser from './pages/CreateUser';
import TablesPage from './pages/TablesPage';
import NotFoundPage from './pages/NotFoundPage';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={SignUpForm} />
        <Route path='/sign-up' component={SignUpForm} />
        <Route path='/sign-in' component={SignInForm} />
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/create-asset' component={CreateAsset} />
        <Route exact path='/create-user' component={CreateUser} />
        <Route exact path='/tables' component={TablesPage} />
        <Route exact path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
