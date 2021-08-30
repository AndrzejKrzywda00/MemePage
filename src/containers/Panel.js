import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import "../styles/Panel.css";
import {withRouter} from 'react-router-dom';

class Panel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_id: localStorage.getItem('id'),
            comment: null,
            meme_id: localStorage.getItem('meme_id'),
            meme_owner: localStorage.getItem("meme_owner")
        }

        this.showEditMeme = this.showEditMeme.bind(this);
        this.handleRemoveMeme = this.handleRemoveMeme.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleChangeCommentContent = this.handleChangeCommentContent.bind(this);
    }

    async handleAddComment() {

        let request = await fetch('https://s401454.labagh.pl/comments', {
            method: "POST",
            body: JSON.stringify({
                author_id: this.state.user_id,
                content: this.state.comment,
                meme_id: this.state.meme_id
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        });

        const responseOk = await request.ok;

        if(responseOk) {
            await new Promise(r => setTimeout(r,200));
            window.location.reload(true);
        }

    }

    showEditMeme() {

        if(this.state.user_id === localStorage.getItem("meme_owner")) {
            this.props.history.push("/edit-meme");
        }
        else {
            this.props.history.push("/login");
        }

    }

    async handleRemoveMeme() {

        if(this.state.user_id === localStorage.getItem("meme_owner")) {

            let imageRequest = await fetch('https://s401454.labagh.pl/images/' + this.state.meme_id, {
                method: "DELETE",
                headers : {
                    "Content-Type": "application/json",
                    "Accept" : "*/*"
                }
            });

            const imageResponse = await imageRequest.ok;

            let commentRequest = await fetch('https://s401454.labagh.pl/comments/' + this.state.meme_id, {
                method: "DELETE",
                headers : {
                    "Content-Type": "application/json",
                    "Accept" : "*/*"
                }
            });

            const commentResponse = await commentRequest.ok;

            let memeRequest = await fetch('https://s401454.labagh.pl/memes/' + this.state.meme_id, {
                method: "DELETE",
                headers : {
                    "Content-Type": "application/json",
                    "Accept" : "*/*"
                }
            });

            const memeResponse = await memeRequest.ok;

            if(memeResponse && commentResponse && imageResponse) {
                this.props.history.push("/all-memes");
            }

        }

        else {
            this.props.history.push("/login");
        }

    }

    handleChangeCommentContent =(event)=> {
        this.setState({comment: event.target.value});
    }

    render () {
        return (
            <div>
                <div id={'panel'}>
                    <Button id={'edit'} onClick={this.showEditMeme}>Edytuj mema</Button>
                    <Button id={'delete'} onClick={this.handleRemoveMeme}>Usuń mema</Button>
                </div>

                <div id={'comment-section'}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Twój komentarz:</Form.Label>
                            <Form.Control name={'text'} as={'textarea'} rows={3} required={true} onChange={this.handleChangeCommentContent}></Form.Control>
                        </Form.Group>
                        <Button id={'comment-btn'} onClick={this.handleAddComment}>Skomentuj</Button>
                    </Form>
                </div>

            </div>
        );
    }

}

export default withRouter(Panel);