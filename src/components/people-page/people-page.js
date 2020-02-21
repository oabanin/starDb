import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false

  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList
            getData={this.swapiService.getAllPeople}
            onItemSelected={this.onPersonSelected}
            renderItem={({name, gender, birthYear}) => `${name}, ${gender}, ${birthYear}`}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
          <ErrorButton />
        </div>

      </div>
    );
  }
}
