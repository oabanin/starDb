import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter} from 'react-router-dom';

const StarshipsPage = ({history})=> {
        //console.log(itemId);
        return (<StarshipList onItemSelected={(itemId)=>{
                history.push(itemId);
        }} />);
}

export default withRouter(StarshipsPage);  //working without withROuter