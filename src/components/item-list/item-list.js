import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './item-list.css';

import { withData } from '../hoc-helpers';

const ItemList = (props) => {
  const { data, children, onItemSelected } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = children(item);
    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );

}



const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);