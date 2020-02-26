import React, { Component } from 'react';
import './item-details.css';
import Spinner from '../spinner';

const Record = ({ item, field, label }) => {

  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};
export default class PersonDetails extends Component {

  state = {
    person: null,
    loading: null,
    image: null
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.personId !== this.props.personId) {
      this.setState({loading: true});
      this.updatePerson();
    }

  }

  updatePerson() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return
    }
    
    getData(itemId)
      .then((itemObj) => {
        this.setState({ person: itemObj, loading: false, 
          image: getImageUrl(itemObj) 
        })
      })
  }

  render() {
    const {image, person, loading} = this.state;
    
    if (!person && !loading) {
      return <span>Select person from a list</span>;
    }
    let child = React.Children.map(this.props.children, (child)=>{
      return React.cloneElement(child, {item: person}) ;
    })
    return (
      <div className="person-details card">
        {this.state.loading ? <Spinner/>: <Person 
        person={this.state.person} 
        image={image} 
        child={child} />}
      </div>
    )
  }
}

const Person = ({ person: { name }, image, child }) => {

  return (<React.Fragment>
    <img className="person-image"
      alt={name}
      src={image} />
    <div className="card-body">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
       {child}
        {/* <li className="list-group-item">
          <span className="term">Gender</span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Birth Year</span>
          <span>{birthYear}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Eye Color</span>
          <span>{eyeColor}</span>
        </li> */}
      </ul>
    </div>
  </React.Fragment>);
}

