import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import NavigationBar from "./components/navigationBar"
import TestPage from './views/TestPage';
import HomePage from './views/HomePage';
import Footer from './components/Footer';

import { HashRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/board-delivery" component={TestPage} />
          <Route path="/home-delivery" component={TestPage} />
          <Route path="/services" component={TestPage} />
          <Route path="/auctions" component={TestPage} />
          <Route path="/new" component={TestPage} />
          <Route path="/sale" component={TestPage} />
        </Switch>
         <Footer/> 
      </HashRouter>
      
    </div>
  );
}

export default App;
