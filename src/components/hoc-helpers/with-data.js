import React, { Component } from 'react';
import Spinner from "../spinner/spinner";
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
    return class extends Component {

        state = {
            itemList: null,
            loading: true,
            error: false
        };

        componentDidUpdate(prevProps, prevState) {
            if (prevProps.getData !== this.props.getData) {
                this.update();
            }

        }



        componentDidMount() {
            this.update();

        }

        update() {
            this.setState({ loading: true, error: false })
            this.props.getData()
                .then((itemList) => {
                    this.setState({
                        itemList, 
                        loading: false
                    });
                })
                .catch(()=>{
                    this.setState({error: true, loading:false})
                });
        }

        render() {
            const { itemList, loading, error } = this.state;

            if (loading) {
                return <Spinner />;
            }

            if( error ){
                return <ErrorIndicator/>
            }
            return (<View data={itemList} {...this.props} />);
        }
    };
};

export default withData;