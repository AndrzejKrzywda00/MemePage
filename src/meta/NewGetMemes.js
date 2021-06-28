import React from 'react';

function NewGetMemes() {

    const data = [];

    fetch('https://s108.labagh.pl/memes/',
            {
                Method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                }),
            })
            .then(response => response.json())
            .then(data => {
                return data;
            });
    return data;
}

export default NewGetMemes;