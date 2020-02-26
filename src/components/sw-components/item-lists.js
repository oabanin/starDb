import React from  'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiServive = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets} = swapiServive;

const PlanetList = withData(ItemList, getAllPlanets);
const PeopleList = withData(ItemList, getAllPeople);
const StarshipList =  withData(ItemList, getAllStarships);

export {
    PlanetList,
    PeopleList,
    StarshipList
};