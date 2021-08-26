import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import "../styles/Panel.css";

class Panel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_id: localStorage.getItem('id')
        }

    }

    render () {
        return (
          <div id={'panel'}>
              <Button id={'add-comment'}>Dodaj komentarz</Button>
              <Button id={'edit'}>Edytuj</Button>
              <Button id={'delete'}>Usuń</Button>
          </div>
        );
    }

}

export default Panel;