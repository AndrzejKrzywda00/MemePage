import {useEffect, useState} from 'react';

const MyComponent =()=> {
    const [error, setError] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=> {
        fetch("https://labagh.pl/memes/1")
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
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading ...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.title} {item.description}
                    </li>
                ))}
            </ul>
        )
    }
}