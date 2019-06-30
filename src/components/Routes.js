import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CreateAsset from './pages/CreateAsset';


// import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
// import MapsPage from './pages/MapsPage';
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

        {/* <Route path='/profile' component={ProfilePage} /> */}
        <Route exact path='/tables' component={TablesPage} />
        {/* <Route path='/maps' component={MapsPage} /> */}
        <Route exact path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
