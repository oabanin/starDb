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
const ListWithChildren = withChildFunction(ItemList, ({ name }) => <span>{name}</span>)

const PlanetList = withData(ListWithChildren, getAllPlanets);
const PeopleList = withData(ListWithChildren, getAllPeople);
const StarshipList = withData(ListWithChildren, getAllStarships);

export {
    PlanetList,
    PeopleList,
    StarshipList
};