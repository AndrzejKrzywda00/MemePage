import React from "react";

/*
This model is to be used like this:
<Emoji symbol="paste emoji from external source"/>
 */
const Emoji =({props})=> {
    return (
        <span
            className="emoji"
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
        >
            {props.symbol}
        </span>
    );
}

export default Emoji;