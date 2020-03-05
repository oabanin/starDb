import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorBoundary from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";




import {PeoplePage, StarshipPage, PlanetsPage} from '../pages';

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
          <Header onServiceChange={this.onServiceChange} />
          <RandomPlanet/>
          <PeoplePage />
          <StarshipPage/>
          <PlanetsPage/>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };

}