import React from 'react';

function GetImage(props) {

    fetch('https://s108.labagh.pl/images',
        {
            Method: "GET",
            body: JSON.stringify(body),
            headers: new Headers({
                Accept: "*/*"
            }),
        })
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            }
        )
    return undefined;
}

export default GetImage;