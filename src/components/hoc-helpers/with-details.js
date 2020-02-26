import React, { Component } from 'react';
import Spinner from "../spinner/spinner";
import ErrorIndicator from '../error-indicator';

// const swapiService = new SwapiService();

// const {
//     getPerson,
//     getPlanet,
//     getStarship,
//     getPersonImage,
//     getPlanetImage,
//     getStarshipImage
// } = swapiService;


const withDetails = (View, getData, getImage) => {
    
    return class extends Component {

        state = {
            person: null,
            loading: null,
            image: null
          }
        
        componentDidMount(){
            console.log( getData);

            getData(this.props.itemId)
            .then((itemObj) => {
              this.setState({ person: itemObj, loading: false, 
                image: getImage(itemObj) 
              })
            })
        }
        

        render() {
            return (<View {...this.props} />);
        }
    }
}

export default withDetails