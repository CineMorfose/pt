import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Detalle } from '../components/Detalle';
import { DashboarHome } from './DashboarHome';

  export const AppRouter = ()=>{
      return(
          <div>
              <Router>
                  <div>
                      <Switch>
                          <Route exact path="/detalle" component={ Detalle }></Route>
                          <Route path="/" component={ DashboarHome }></Route>
                      </Switch>
                  </div>
              </Router>
          </div>
      )
  }