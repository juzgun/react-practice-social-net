import React from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import DialogContainer from './components/Dialog/DialogContainer';
import Friends from './components/Friends/Friends';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import ProfilePage from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { useEffect } from 'react';
import { initializeApp } from './redux/appReduser';
import {connect, Provider} from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import {compose} from "redux";
import store from "./redux/redux-store";

const App = (props) => {

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
            <Route path="/dialogs" render={() => <DialogContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfilePage />} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/login" render={() => <Login />} />
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
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp;