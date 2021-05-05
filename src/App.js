import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
  
        // Use this documentReference to listen for the documentSnapshot events
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        
        // If the userAuth comes back as null, which means the user signs out, set the currentUser state to null
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {

    // In order to prevent any memory leaks, whenever the app unmounts, unsubscribe from the listener that is just initiated.
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            )} />
        </Switch>
      </div>
    );
  }
}

// App component now needs the store state passed as props to determine what to render on the page
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// The return of the mapDispatchToProps function will be merged to your connected component as props.
// You may call them directly to dispatch its action.
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);