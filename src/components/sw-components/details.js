import React, { Component } from 'react';
import Spinner from '../spinner';
import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';



const PlanetDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
   {({getPlanet, getPlanetImage})=>( <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>
      <Record label="Population" field="population" />
      <Record label="Rotation Period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>)}
  </SwapiServiceConsumer>
);


const PeopleDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getPerson, getPersonImage }) => {
      return (
        <ItemDetails
          itemId={itemId}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record label="Gender" field="gender" />
          <Record label="Birth Year" field="birthYear" />
          <Record label="Eye Color" field="eyeColor" />
        </ItemDetails>
      )
    }}
  </SwapiServiceConsumer>);

const StarshipDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getStarship, getStarshipImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getStarship}
        getImageUrl={getStarshipImage}>
        <Record label="Model" field="model" />
        <Record label="Length" field="length" />
        <Record label="Cost" field="costInCredits" />
      </ItemDetails>)}

  </SwapiServiceConsumer>
);

export {
  PlanetDetails,
  PeopleDetails,
  StarshipDetails
};