import React, { Component } from 'react';
import Spinner from "../spinner/spinner";
import ErrorIndicator from '../error-indicator';

const withData = (View, getData) => {
    return class extends Component {

        state = {
            itemList: null
        };

        componentDidMount() {

            getData()
                .then((itemList) => {
                    this.setState({
                        itemList
                    });
                });
        }

        render() {
            const { itemList } = this.state;

            if (!itemList) {
                return <Spinner />;
            }
            return (<View data={itemList} {...this.props} />);
        }
    };
};

export default withData;