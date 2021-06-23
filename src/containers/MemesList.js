import React from 'react';
import {ListGroup} from "react-bootstrap";

const MemesList =({children})=> {
    return (
      <ListGroup>
          {children}
      </ListGroup>
    );
}

export default MemesList;