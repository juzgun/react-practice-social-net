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


const App = () => {
  return (
    <BrowserRouter>
      <div className="flex app-wrapper">
        <div className="sidebar">
          <Header />
          <Nav />
        </div>
        <Route path="/dialogs" component={Dialog} />
        <Route path="/profile" component={Profile} />
        <Route path="/friends" component={Friends} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
        <Route path="/music" component={Music} />
      </div>
    </BrowserRouter>
  );
}

export default App;