import React, {Component} from 'react';
import MemeView from "./MemeView";
import AddComment from "./AddComment";
import Comments from "./Comments";
import Gallery from "./Gallery";

class Meme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meme_id: localStorage.getItem('meme_id')
        }
    }

    render() {
        return (
            <div>
                <Gallery/>
                <MemeView/>
                <Comments/>
                <AddComment/>
            </div>
        );
    }

}

export default Meme;