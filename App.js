import React,{ useState } from 'react';
import './App.css';
import fire from './firebase/fire';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { GlobalProvider } from './context/GlobalState';


function App() {

 
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}} className="container">
    <GlobalProvider>
    <Router>  
      <Switch>
     <Route exact path={'/home'} component={Home} />
     <Route  path={'/adduser'} component={AddUser} />
     <Route  path={'/edituser'} component={EditUser} />
      </Switch>
    </Router> 
   </GlobalProvider> 
    </div>
  );
}

export default App;
