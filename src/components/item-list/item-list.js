import React from 'react';
import './item-list.css';

// import { withData } from '../hoc-helpers';
// const { getAllPeople } = new SwapiService();
// export default withData(ItemList, getAllPeople);

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
ItemList.defaultProps = {
  onItemSelected: ()=>{}
}

export default ItemList;
