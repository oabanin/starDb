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


const withChildFunction = fn => Wrapped => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>);
    };
}

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;


const PlanetList = withSwapiService(mapPlanetsMethodsToProps)(withData(withChildFunction(renderName)(ItemList)));
const PeopleList = withSwapiService(mapPersonMethodsToProps)(withData(withChildFunction(renderName)(ItemList)));
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(withData(withChildFunction(renderModelAndName)(ItemList)));

export {
    PlanetList,
    PeopleList,
    StarshipList
};