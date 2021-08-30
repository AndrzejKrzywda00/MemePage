import React, {Component} from 'react';
import {Redirect, withRouter} from "react-router-dom";
import {Button, Form, FormControl} from "react-bootstrap";
import "../styles/CommentEditor.css";

class CommentEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            content: [],
            comment_id: localStorage.getItem('comment_id'),
            meme_id: 1
        }
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    async handleCommentSubmit() {

        let request = await fetch('https://s401454.labagh.pl/comments/', {
            method: "PUT",
            headers: {
                "Accept" : "*/*"
            },
            body: JSON.stringify({
                id: this.state.comment_id,
                content: this.state.content
            })
        });

        if(request.ok) {
            this.props.history.push("/single-meme");
        }

    }

    async componentDidMount() {

        await fetch('https://s401454.labagh.pl/comments/' + this.state.meme_id + '/' + this.state.comment_id, {
            method: "GET",
            headers: {
                "Accept" : "*/*"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({content: data[0].content});
                this.setState({isLoaded: true});
            });

    }

    handleContentChange =(event)=> {
        this.setState({content: event.target.value});
    }

    render() {

        if(localStorage.getItem("logged") !== "true") {
            return <Redirect to={"/login"}></Redirect>;
        }

        const {isLoaded, content} = this.state;

        return (
            isLoaded ?
            <div id={'comment-editor'}>
                <h2>Edytuj komentarz</h2>
                <Form id={'edit-com'}>
                    <Form.Group>
                        <Form.Label id={'title-com'}>Treść:</Form.Label>
                        <FormControl
                            name={'text'}
                            id={'content'}
                            as={'textarea'}
                            rows={3}
                            onChange={this.handleContentChange}
                            defaultValue={content}
                        />
                    </Form.Group>
                    <Button id={'add-comment-btn'} onClick={this.handleCommentSubmit}>Dodaj</Button>
                </Form>
            </div>
                :
                <div>
                    <p>Loading...</p>
                </div>
        );
    }

}

export default withRouter(CommentEditor);