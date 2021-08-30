import React, {Component} from 'react';
import "../styles/MemeView.css";
import {Like} from '../containers/Like';
import {withRouter} from "react-router-dom";

class MemeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memeIsLoaded: false,
            imageIsLoaded: false,
            meme_id: localStorage.getItem('meme_id'),
            user_id: localStorage.getItem('id'),
            meme_data: [],
            image: [],
            views: 'views',
            like: [],
            likeIsLoaded: false,
            author_nick: [],
            meme_owner: [],
            users: []
        }
        this.handleLike = this.handleLike.bind(this);
    }

    async componentDidMount() {

        // fetch meme data
        await fetch('https://s401454.labagh.pl/memes/'+ this.state.meme_id,
            {
                Method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                }),
            })
            .then(response => response.json())
            .then(data => {
                this.setState({memeIsLoaded: true});
                this.setState({meme_data: data[0]});
                this.setState({meme_owner: data[0].added_by});
                localStorage.setItem("meme_owner",this.state.meme_owner);
            });

        // fetch image to this meme
        await fetch('https://s401454.labagh.pl/images/' + this.state.meme_id,
            {
                Method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                }),
            })
            .then(response => response.blob())
            .then(
                (result) => {
                    this.setState({image: URL.createObjectURL(result)});
                    this.setState({imageIsLoaded: true});
                }
            );

        // fetch to add views
        await fetch('https://s401454.labagh.pl/memes/' + this.state.meme_id, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "*/*"
            },
            body: JSON.stringify({
                update_type: this.state.views
            }),
        });

        // check if to show liked or not
        await fetch('https://s401454.labagh.pl/likes/' + this.state.meme_id + '/' + this.state.user_id,{
            method: "GET",
            headers: {
                "Accept" : "*/*"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({like: data[0]});
                this.setState({likeIsLoaded: true});
            });


        if(this.state.memeIsLoaded) {

            // take user data
            await fetch('https://s401454.labagh.pl/users/' + this.state.meme_owner, {
                method: "GET",
                headers: {
                    "Accept" : "*/*"
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({author_nick: data[0].nick});
                });
        }
    }

    async handleLike() {

        let method = null;
        let update_type = null;

        if(this.state.like) {
            method = "DELETE";
            update_type = "remove_like";
        }
        else {
            method = "POST";
            update_type = "add_like";
        }

        let likeRequest = await fetch('https://s401454.labagh.pl/likes',{
            method: method,
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "*/*"
            },
            body: JSON.stringify({
                meme_id: this.state.meme_id,
                user_id: this.state.user_id
            })
        });

        let likeMemeRequest = await fetch('https://s401454.labagh.pl/memes/' + this.state.meme_id, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "*/*"
            },
            body: JSON.stringify({
                update_type: update_type
            })
        });

        if(likeRequest.ok && likeMemeRequest.ok)
        {
            window.location.reload();
        }

    }

    render() {
        const {memeIsLoaded, meme_data, imageIsLoaded, image, author_nick} = this.state;

        return (
            memeIsLoaded && imageIsLoaded ?
            <div>
                <div id={'img-div'}>
                    <img src={image} alt={''} id={'head-img'} className={'center'}/>
                </div>
                <h1 id={'meme-title'}>{meme_data.title}</h1>
                <h3 id={'meme-description'}>{meme_data.description}</h3>
                <div>
                    <h3 id={'year'}>Rok powstania mema: {meme_data.year}</h3>
                </div>
                <div id={'liked-viewed'}>
                    <h5>Obejrzano {meme_data.views} razy</h5>
                    <h5>Pulubiono {meme_data.likes} razy</h5>
                    <div id={'like-div'}>
                        <Like functionClick={this.handleLike} likeData={this.state.like} userId={this.state.user_id}></Like>
                    </div>
                </div>
                <div>
                    <p>Mema dodano {meme_data.added_at}</p>
                    <p>Autor wątku: {author_nick}</p>
                </div>
            </div>
                :
                <p>Loading...</p>
        );
    }

}

export default withRouter(MemeView);