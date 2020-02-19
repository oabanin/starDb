import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import './person-details.css';
import Spinner from '../spinner';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: null
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
    const { personId } = this.props;
    if (!personId) {
      return
    }
    

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({ person, loading: false })
      })
  }

  render() {

    if (!this.state.person && !this.state.loading) {
      return <span>Select person from a list</span>;
    }

    return (
      <div className="person-details card">
        {this.state.loading ? <Spinner/>: <Person person={this.state.person} />}
      </div>
    )
  }
}

const Person = ({ person: { id, name, gender,
  birthYear, eyeColor } }) => {
  return (<React.Fragment>
    <img className="person-image"
      alt={name}
      src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
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