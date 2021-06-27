import React from 'react';

async function NewGetMemes() {

    return await
        fetch('https://s108.labagh.pl/memes/',
            {
                Method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                }),
            })
            .then(response => response.json());
}

export default NewGetMemes;