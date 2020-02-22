import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import SwapiService from '../../services/swapi-service';

import './people-page.css';


const Row = ({ left, right }) => {
  return (<div className="row mb-2">
    <div className="col-md-6">
      {left}
    </div>
    <div className="col-md-6">
      {right}
    </div>
  </div>);
}

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

    const itemList = (<ItemList
      getData={this.swapiService.getAllPeople}
      onItemSelected={this.onPersonSelected}>
      {(i) => `${i.name}, ${i.gender}, ${i.birthYear}`}
    </ItemList>)

      ;

    const personDetails = <PersonDetails personId={this.state.selectedPerson} />;

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
