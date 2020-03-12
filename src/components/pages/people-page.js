import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row';

import {
    PeopleList as PersonList,
    PeopleDetails
} from '../sw-components';

const PeoplePage = ({ history, match }) => {

    const {id} = match.params;
   
        return (
            <Row
                left={<PersonList onItemSelected={(id) => history.push(id)} />}
                right={<PeopleDetails itemId={id} />} />);
    
}

export default withRouter(PeoplePage);