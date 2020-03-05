import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';


const PeopleDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye Color" field="eyeColor" />
    </ItemDetails>
  )

}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default withSwapiService(PeopleDetails, mapMethodsToProps);