import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import './item-details.css';
import Spinner from '../spinner';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

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
        console.log(itemObj);
        this.setState({ person: itemObj, loading: false, 
          image: getImageUrl(itemObj) 
        })
      })
  }

  render() {
    const {image} = this.state;
    
    if (!this.state.person && !this.state.loading) {
      return <span>Select person from a list</span>;
    }

    return (
      <div className="person-details card">
        {this.state.loading ? <Spinner/>: <Person person={this.state.person} image={image} />}
      </div>
    )
  }
}

const Person = ({ person: { id, name, gender,
  birthYear, eyeColor }, image }) => {
    console.log(image)
  return (<React.Fragment>
    <img className="person-image"
      alt={name}
      src={image} />
    <div className="card-body">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
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
        </li>
      </ul>
    </div>
  </React.Fragment>);
}