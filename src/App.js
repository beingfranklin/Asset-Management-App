import React, { Component } from 'react';
import Routes from '../src/components/Routes';


// import Footer from './components/Footer';
import './index.css';
import './App.css'

class App extends Component {

  render() {
    return (


      <div className="flexible-content">
        {/* <Switch>
          <Route exact path='/' component={SignUpForm} />
          <Route path='/sign-up' component={SignUpForm} />
          <Route path='/sign-in' component={SignInForm} />
        </Switch> */}
        {/* <TopNavigation /> */}
        {/* <SideNavigation /> */}
        {/* <main id="content" className="p-5"> */}
        <Routes />

        {/* </main> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
