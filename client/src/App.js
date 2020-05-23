import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import Header from './components/Header'
import Index from './views/Index'
import Projects from './views/Projects'
import Contact from './views/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
          <Router>
              <Header/>
              <Switch>
                <Route path='/' exact component={Index}/>
                <Route path='/projects' exact component={Projects}/>
                <Route path='/contact' component={Contact}/>             
              </Switch>
          </Router>
    </div>
  );
}

export default App;