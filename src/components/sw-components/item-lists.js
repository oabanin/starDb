import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, withChildFunction, compose } from '../hoc-helpers';



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




const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;


const PlanetList = compose(
    withSwapiService(mapPlanetsMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);
const PeopleList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName)
)
    (ItemList);
const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(renderModelAndName))
    (ItemList);

export {
    PlanetList,
    PeopleList,
    StarshipList
};