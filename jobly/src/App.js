import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, NavLink } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
        <Route exact path="/">
          <Home/>
        </Route>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
