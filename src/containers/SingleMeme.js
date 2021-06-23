import React, {useEffect, useState} from 'react';
import Image from '../img/meme_thumbnail.png';

function SingleMeme (props) {

    const [error, setError] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(()=> {
        fetch("https://s108.labagh.pl/memes" + props.id,
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

    return(<h1>Proste zdanie</h1>)

}

export default SingleMeme;