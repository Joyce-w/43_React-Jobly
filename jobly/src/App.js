import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Companies from './Companies';
import Jobs from './Jobs';
import Profile from './Profile';
import Auth from './Auth/Auth';
import Signup from './Auth/Signup'
import NavBar from './NavBar/NavBar';
import Home from './Home/Home'

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
        <Route exact path="/login">
          <Auth/>          
        </Route>
        <Route exact path="/register">
          <Signup/>          
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
