import React from 'react';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import { useEffect } from 'react';
import { initializeApp } from './redux/appReduser';
import {connect, Provider} from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import {compose} from "redux";
import store from "./redux/redux-store";
import withSuspense from "./hoc/WithSuspense";


const DialogContainer = React.lazy(() => import('./components/Dialog/DialogContainer'));
const ProfilePage = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Friends = React.lazy(() => import('./components/Friends/Friends'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Login = React.lazy(() => import('./components/Login/Login'));


const App = (props) => {
  const catchAllUnhandledErrors = (reason, promiseRejectionEvent) => {
  console.info(reason);
  }
  useEffect(() => {
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
  }, [])
  useEffect(() => {
    props.initializeApp();
  }, [props]);

  if (!props.initialized) {
    return <div><Preloader /></div>
  } else {
    return (
        <div className="flex app-wrapper">
          <div className="sidebar">
            <HeaderContainer />
            <Nav />
          </div>
          <Switch>
            <Route path="/dialogs" render={withSuspense(DialogContainer)} />
            <Route path="/profile/:userId?" render={withSuspense(ProfilePage)} />
            <Route path="/friends" render={withSuspense(Friends)} />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/news" render={withSuspense(News)} />
            <Route path="/settings" render={withSuspense(Settings)} />
            <Route path="/music" render={withSuspense(Music)} />
            <Route path="/login" render={withSuspense(Login)} />
            <Redirect to="/profile" />
          </Switch>
        </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer =  compose( withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainApp;