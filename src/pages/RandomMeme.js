import React from "react";
import '../styles/RandomMeme.css';
import RandomMemeView from "../components/RandomMemeView";
import AddComment from "../components/AddComment";
import Comments from "../components/Comments";

/***
 *
 * @param location is a path provided by router
 * @returns {JSX.Element} is an actual element
 */
class RandomMeme extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }

    render () {
        return (
          <div>
              <RandomMemeView/>
              <Comments/>
              <AddComment/>
          </div>
        );
    }

}

export default RandomMeme;