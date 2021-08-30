import React, {Component} from 'react';
import {Comment} from "../containers/SingleComment";
import {withRouter} from "react-router-dom";


class CommentData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: [],
            userLoaded: false,
            meme_id: localStorage.getItem('meme_id')
        }
        this.handleEditComment = this.handleEditComment.bind(this);
        this.handleRemoveComment = this.handleRemoveComment.bind(this);
    }

    async handleRemoveComment() {

        let request = await fetch('https://s401454.labagh.pl/comments/' + this.state.meme_id + '/' + this.props.Id, {
            method: "DELETE",
            headers: {
                "Accept" : "*/*"
            }
        });

        if(request.ok) {
            window.location.reload(true);
        }

    }

    async handleEditComment() {
        localStorage.setItem('comment_id',this.props.Id);
        this.props.history.push("/edit-comment");
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
                    <Comment
                        userId={this.props.userId}
                        addedAt={this.props.addedAt}
                        authorNick={userData.nick}
                        authorId={this.props.authorId}
                        content={this.props.content}
                        Id={this.props.Id}
                        id={this.props.id}
                        handleEditComment={this.handleEditComment}
                        handleRemoveComment={this.handleRemoveComment}
                    />
                </div>
                :
                <div>
                    <p>Loading...</p>
                </div>
        );

    }

}

export default withRouter(CommentData);