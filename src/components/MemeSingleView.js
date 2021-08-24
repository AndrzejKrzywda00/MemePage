import React, {Component} from 'react';

class MemeSingleView extends Component {

    /*
    On top goes single Meme
    ---
    Comments
    {comment
    comment
    comment}
    Comments
    ---
    add Comment
     */

    constructor(props) {
        super(props);
        this.state = {
            myObj: null
        }
    }

    render() {
        return (
            <div>
                <h1>Tu będzie pojedynczy mem</h1>
            </div>
        );
    }

}

export default MemeSingleView;