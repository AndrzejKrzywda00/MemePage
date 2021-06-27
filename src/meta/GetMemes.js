import React from 'react';
import {useEffect, useState} from 'react';

/***
 * This function gets meme ad id or all memes if id not specified
 * @param props - an obj defying what data to take
 * @returns {JSX.Element|*} - parsed json to retrieve fields
 */
function GetMemes(props) {

    const [error, setError] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    useEffect(()=> {

        fetch("https://s108.labagh.pl/memes/" + props.id,
            {
                method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                })
            })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, []);

    if(error) {
        return <div>Error : {error.message}</div>
    } else if(!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return items;
    }
}

export default GetMemes;