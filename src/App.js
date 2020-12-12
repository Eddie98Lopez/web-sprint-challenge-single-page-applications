import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home.js'
import Form from './Form.js'


const App = () => {
  return (
    <div>

    <Router>

    <Link to="/">Home</Link>
    <Link to="/order-now">OrderNow</Link>

    <Route exact path="/" component={Home}/>
    <Route path="/order-now" component={Form}/>

    </Router>

    
    </div>
  );
};
export default App;
