import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
        <Route path="/dialogs" render={() => <Dialog dialogsPage={props.state.dialogsPage} />} />
        <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} />} />
        <Route path="/friends" render={() => <Friends />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/music" render={() => <Music />} />
      </div>
    </BrowserRouter>
  );
}

export default App;