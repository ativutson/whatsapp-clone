import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
            <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
      
    </div>
  );
}

export default App;