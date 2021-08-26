import React, {Component} from 'react';
import MemeView from "./MemeView";
import AddComment from "./AddComment";
import Comments from "./Comments";
import Panel from "../containers/Panel";

class Meme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meme_id: localStorage.getItem('meme_id'),
            logged: localStorage.getItem('logged'),
            user_id: localStorage.getItem('id')
        }
    }

    render() {

        if(this.state.logged !== "true") {
            return (
                <div>
                    <MemeView/>
                    <Comments/>
                    <AddComment/>
                </div>
            );
        }

        return (
          <div>
              <MemeView/>
              <Comments/>
              <AddComment/>
              <Panel/>
          </div>
        );

    }

}

export default Meme;