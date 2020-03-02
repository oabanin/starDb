import React, { Component } from 'react';
import Spinner from '../spinner';
import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';

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

export default PeopleDetails;