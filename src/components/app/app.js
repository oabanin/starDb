import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
import './app.css';
import ErrorIndicator from '../error-indicator';

export default class App extends React.Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null,
    hasError: false 
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

  componentDidCatch(){
    console.log('componentDidCatch');
    this.setState({hasError:true});
  }

  render() {

    if(this.state.hasError){
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return (
      <div>
        <Header />

        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  };

}