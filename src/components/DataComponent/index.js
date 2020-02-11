import React from 'react';

import loading from '../../hoc/loading';
import Data from '../Data';
import MoreData from '../MoreData';


const data = [
    {
        name: 'Peter Beardsley',
        age: 55,
        location: 'London'
    },
    {
        name: 'Bob Bradley',
        age: 45,
        location: 'USA'
    }
]

class DataComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({data});
        }, 5000);
    }

    render() {
        console.log(this.state.data);
        const DataComponent = loading(this.state.data)(Data);
        const MoreDataComponent = loading(this.state.data)(MoreData);
        return (
            <>
                <DataComponent />
                <MoreDataComponent />
            </>
        )
    }
}

export default DataComponent;