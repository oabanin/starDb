import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorBoundary from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import {
  StarshipDetails
} from '../sw-components';

import {
  BrowserRouter as Router,
  Route,
  Switch, Redirect
} from "react-router-dom";



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
              <Switch>
                <Route path="/" exact render={() => <h2>Welcome to star DB</h2>} />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/people" render={()=> <p>Ureacheable because of Switch</p>} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipPage} />
                <Route path="/starships/:id" render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />
                }
                } />
                {/* <Redirect to='/'/> */}
                <Route render={()=><p>Page not found</p>}/>

              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };


}