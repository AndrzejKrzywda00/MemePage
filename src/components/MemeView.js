import React, {Component} from 'react';

class MemeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memeIsLoaded: false,
            imageIsLoaded: false,
            meme_id: localStorage.getItem('meme_id'),
            meme_data: [],
            images: []
        }
    }

    async componentDidMount() {

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
                this.setState({meme_data: data});
            });

        await fetch('https://s401454.labagh.pl/images/' + this.state.meme_id,
            {
                Method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                }),
            })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({images: result});
                    this.setState({imageIsLoaded: true});
                }
            );

    }

    render() {
        return (
          <div>
              <p>{this.state.imageIsLoaded}</p>
              <p>{this.state.memeIsLoaded}</p>
          </div>
        );
    }

}

export default MemeView;