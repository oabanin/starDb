import React from 'react';
import ItemDetails, { Record } from '../item-details';

import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => (
<ItemDetails {...props}>
      <Record label="Population" field="population" />
      <Record label="Rotation Period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>);
    
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);