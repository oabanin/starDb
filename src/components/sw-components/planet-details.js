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

export default PlanetDetails;