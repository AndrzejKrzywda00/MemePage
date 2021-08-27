import React, {Component} from 'react';
import {Comment} from "../containers/SingleComment";


class CommentData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: [],
            userLoaded: false
        }
    }

    async componentDidMount() {

        await fetch('https://s401454.labagh.pl/users/' + this.props.authorId, {
            method: "GET",
            headers: {
                "Accept" : "*/*"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({userData: data[0]});
                this.setState({userLoaded: true});
            });
    }

    render() {
        const {userData, userLoaded} = this.state;
        return (
            userLoaded ?
                <div>
                    <Comment userId={this.props.userId} addedAt={this.props.addedAt} authorNick={userData.nick} authorId={this.props.authorId} content={this.props.content} Id={this.props.Id} id={this.props.id}/>
                </div>
                :
                <div>
                    <p>Loading...</p>
                </div>
        );

    }

}

export default CommentData;