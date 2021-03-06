import React from 'react';
import"bootstrap/dist/css/bootstrap.min.css";
import{ BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import './App.css'

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
      <div>
     
        <Link to="/">Home</Link>{''}
        <Link to="/contact">Contact</Link>{''}
        <Link to="/links">Links</Link>{''}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/links" render={()=> <h1>Links</h1>}/>
          <Route render={()=> <h1>Page not found</h1>}/>
        </Switch>
      </div>
      </BrowserRouter>
      </div>
  );
}
export default App;
