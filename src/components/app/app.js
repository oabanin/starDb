import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Row from '../row';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import ErrorButton from '../error-button';
import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';

import {PeopleList as PersonList} from '../sw-components';
import {PeopleDetails as PersonDetails} from '../sw-components';


export default class App extends React.Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedPerson: null,
    selectedPlanet: null
  };

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>
        <Record label="Gender" field="gender" />
        <Record label="Birth Year" field="birthYear" />
        <Record label="Eye Color" field="eyeColor" />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>
        <Record label="Model" field="model" />
        <Record label="Length" field="length" />
        <Record label="Cost" field="costInCredits" />
      </ItemDetails>
    )

    return (
      <>
        <Header />
        {/* <PersonList/>
        <PersonDetails/> */}

        {/* {planet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton /> */}

        {/* <PeoplePage />  */}

        <div className="row mb-2">
          <div className="col-md-6">
            <PersonList
              onItemSelected={this.onItemSelected}>
              {(i) => `${i.name}, ${i.gender}, ${i.birthYear}`}
            </PersonList>
          </div>

        </div>
        {/* 
        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList 
            getData = {this.swapiService.getAllStarships} 
            onItemSelected={this.onItemSelected} 
            renderItem={({name}) => (<span>{name}<button>!</button></span>)}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} /><br/>
            <ErrorButton />
          </div>
        </div> */}

        <Row left={starshipDetails} right={personDetails} />
      </>
    );
  };

}