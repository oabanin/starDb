import React, { Component } from 'react';
import Row from '../row';

import {
    PeopleList as PersonList,
    PeopleDetails
} from '../sw-components';

export default class extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PeopleDetails itemId={this.state.selectedItem} />} />);
    }
}