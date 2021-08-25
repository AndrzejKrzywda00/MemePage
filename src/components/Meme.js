import React, {Component} from 'react';
import MemeView from "./MemeView";
import AddComment from "./AddComment";
import Comments from "./Comments";

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
                <MemeView/>
                <Comments/>
                <AddComment/>
            </div>
        );
    }

}

export default Meme;