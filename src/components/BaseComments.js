import React from 'react';

class BaseComments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
            id: props.id
        }
    }

    async componentDidMount() {
        await fetch('https://s108.labagh.pl/memes/random',
            {
                Method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                })
            })
            .then(response => response.json())
            .then(data => {
                this.setState({isLoaded: true});
                this.setState({data: data});
            });
    }

    render() {
        const {isLoaded, data} = this.state;
        return (
            isLoaded ?
                <div>
                    {data.map( item => (
                        <p>{item.content}</p>
                    ))}
                </div>
                :
                <p>Loading ...</p>

        );
    }
}

export default BaseComments;