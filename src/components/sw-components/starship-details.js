import React, { Component } from 'react';
import Spinner from '../spinner';
import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';

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

export default StarshipDetails;
