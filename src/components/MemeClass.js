import React from 'react';

class MemeClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        console.log(this.props[0]);
        return (
            <div>
                <h1>{this.props[0].id}</h1>
            </div>
        );
    }

}

export default MemeClass;