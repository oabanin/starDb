import React, { Component } from 'react';
import Spinner from "../spinner/spinner";


const withData = (View) => {
    return class extends Component {

        state = {
            itemList: null
        };

        componentDidUpdate(prevProps, prevState) {
            if (prevProps.getData !== this.props.getData ) {
                this.update();
            }
        
          }



        componentDidMount() {
            this.update();

        }

        update(){
            this.props.getData()
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