import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Accion } from '../components/Accion';
import { Aventura } from '../components/Aventura';
import { Comedia } from '../components/Comedia';
import { Detalle } from '../components/Detalle';
import { Drama } from '../components/Drama';
import { Romance } from '../components/Romance';
import { DashboarHome } from './DashboarHome';

  export const AppRouter = ()=>{
      return(
          <div>
              <Router>
                  <div>
                      <Switch>
                          <Route exact path="/detalle" component={ Detalle }></Route>
                          <Route exact path="/accion" component={ Accion }></Route>
                          <Route exact path="/aventura" component={ Aventura }></Route>
                          <Route exact path="/comedia" component={ Comedia }></Route>
                          <Route exact path="/romance" component={ Romance }></Route>
                          <Route exact path="/drama" component={ Drama }></Route>
                          <Route path="/" component={ DashboarHome }></Route>
                      </Switch>
                  </div>
              </Router>
          </div>
      )
  }