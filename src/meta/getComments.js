import React from 'react';
import {useEffect, useState} from 'react';


function getComments(props) {

    const [error, setError] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    useEffect(()=> {

        fetch("https://s108.labagh.pl/comments/" + props.id,
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

export default getComments();