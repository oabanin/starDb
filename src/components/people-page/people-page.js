import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import SwapiService from '../../services/swapi-service';

import './people-page.css';


class ErrorBoundary extends Component {

  state = {
     hasError: false 
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children
  }
}


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
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {


    const itemList = (<ItemList
      getData={this.swapiService.getAllPeople}
      onItemSelected={this.onPersonSelected}>
      {(i) => `${i.name}, ${i.gender}, ${i.birthYear}`}
    </ItemList>)

      ;

    const personDetails = (
      <ErrorBoundary>
    <PersonDetails personId={this.state.selectedPerson} />
    <ErrorButton/>
    </ErrorBoundary>
    );

    return (
      
        <Row left={itemList} right={personDetails} />
        
      
    );
  }
}
