import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';



const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const mapPlanetsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>);
    };
}

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;


const PlanetList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPlanetsMethodsToProps);
const PeopleList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(ItemList, renderModelAndName)), mapStarshipMethodsToProps);

export {
    PlanetList,
    PeopleList,
    StarshipList
};