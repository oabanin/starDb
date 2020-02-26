import React, { Component } from 'react';
import Spinner from '../spinner';
import ItemDetails, {Record} from '../item-details';
import SwapiService from '../../services/swapi-service';


const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;
 

const PlanetDetails = ({itemId}) => (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>
      <Record label="Population" field="population" />
      <Record label="Rotation Period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>
  );


  const PeopleDetails = ({itemId}) => ( <ItemDetails
    itemId={itemId}
    getData={getPerson}
    getImageUrl={getPersonImage}
    >
    <Record label="Gender" field="gender" />
    <Record label="Birth Year" field="birthYear" />
    <Record label="Eye Color" field="eyeColor" />
  </ItemDetails>);

const StarshipDetails = ({itemId}) => (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}>
      <Record label="Model" field="model" />
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
    </ItemDetails>
  );

export {
  PlanetDetails,
    PeopleDetails,
    StarshipDetails
};