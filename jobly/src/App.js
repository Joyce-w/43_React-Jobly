import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Companies from './Companies';
import Jobs from './Jobs';
import Profile from './Profile';
import Auth from './Auth';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Route exact path="/">
          <Home/>          
        </Route>
        <Route exact path="/companies">
          <Companies/>          
        </Route>
        <Route exact path="/jobs">
          <Jobs/>          
        </Route>
        <Route exact path="/profile">
          <Profile/>          
        </Route>
        <Route exact path="/auth">
          <Auth/>          
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
