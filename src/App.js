import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import DialogContainer from './components/Dialog/DialogContainer';
import Friends from './components/Friends/Friends';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="flex app-wrapper">
        <div className="sidebar">
          <HeaderContainer />
          <Nav />
        </div>
        <Switch>
          <Route path="/dialogs" render={() => <DialogContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/friends" render={() => <Friends />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/music" render={() => <Music />} />
          <Redirect to="/profile" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;