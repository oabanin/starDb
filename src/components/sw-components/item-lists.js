import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiServive = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiServive;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>);
    };
}

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;


const PlanetList = withData( withChildFunction(ItemList, renderName), getAllPlanets);
const PeopleList = withData( withChildFunction(ItemList, renderName), getAllPeople);
const StarshipList = withData( withChildFunction(ItemList, renderModelAndName), getAllStarships);

export {
    PlanetList,
    PeopleList,
    StarshipList
};