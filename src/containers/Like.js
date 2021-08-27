import React from 'react';
import "../styles/LikeButton.css";
import {Button} from "react-bootstrap";

const STYLES = ['btn--unlike','btn--like'];
const content = ['Lubię to', 'Nie lubię tego'];

export const Like = ({
    likeData,
    userId,
    functionClick
}) => {

    const checkLikeStyle = (likeData) ? STYLES[0] : STYLES[1];
    const checkContent = (likeData) ? content[1] : content[0];

    if(userId !== "null") {
        return (
            <Button id={checkLikeStyle} onClick={functionClick}>
                {checkContent}
            </Button>
        );
    }

    return (
        <div>
            <p>Aby polubić zaloguj się</p>
        </div>
    );
}