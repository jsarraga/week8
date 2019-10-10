import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import One from './components/One';
import Two from './components/Two';
import './App.css';

function App() {
  return (
    <div className="App">
     <span>
       <Link type="nav" to="/component1">First Component</Link>
       <Link type="nav" to="/component2">Second Componentjfjjfo</Link>
     </span>
      <Route path='/component1' component={One} />
      <Route path='/component2' component={Two} />
    </div>
  );
}

export default App;
