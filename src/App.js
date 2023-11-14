// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import CreateLoopPage from './CreateLoopPage';
import NavBar from './NavBar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css'; // Create a CSS file for animations
import SuccessPage from './SuccessPage';

function App() {
  return (
    <Router>
      <NavBar/>
      <TransitionGroup>
      <CSSTransition  classNames="fade" timeout={''}>
      <Routes>
        <Route path="/" exact element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/create-loop" element={<CreateLoopPage/>} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
