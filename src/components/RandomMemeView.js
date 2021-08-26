import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class RandomMemeView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            memeIsLoaded: false,
            imageIsLoaded: false,
            meme_id: null,
            meme_data: [],
            image: []
        }
    }

    async componentDidMount() {

        await fetch('https://s401454.labagh.pl/memes/random',
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
                this.setState({meme_id: this.state.meme_data.id});
                localStorage.setItem('meme_id',this.state.meme_id);
            });

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

    }

    render() {
        const {memeIsLoaded, meme_data, imageIsLoaded, image} = this.state;

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
                        <Button id={'like-meme'}>Lubię to</Button>
                    </div>
                    <div>
                        <p>Mema dodano {meme_data.added_at}</p>
                        <p>Autor wątku: {meme_data.added_by}</p>

                    </div>
                </div>
                :
                <p>Loading...</p>
        );
    }

}

export default RandomMemeView;