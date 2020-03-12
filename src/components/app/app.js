import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorBoundary from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";


import {
  BrowserRouter as Router,
  Route} from "react-router-dom";



import { PeoplePage, StarshipPage, PlanetsPage } from '../pages';

export default class App extends React.Component {


  state = {
    swapiService: new SwapiService()
  };

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  }


  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      }
    });
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Route path="/people" component={PeoplePage}/>
            <Route path="/planets" component={PlanetsPage}/>
            <Route path="/starships" component={StarshipPage}/>
       
          </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };


}