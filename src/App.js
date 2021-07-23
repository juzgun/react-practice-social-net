import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dialog from './components/Dialog/Dialog';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="flex app-wrapper">
        <div className="sidebar">
          <Header />
          <Nav />
        </div>
        <Switch>
          <Route path="/dialogs" render={() => <Dialog
            dialogsPage={props.state.dialogsPage} />} />
          <Route path="/profile" render={() => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
          <Route path="/friends" render={() => <Friends />} />
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