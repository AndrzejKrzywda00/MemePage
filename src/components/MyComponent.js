import {useEffect, useState} from 'react';

function MyComponent() {
    const [error, setError] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=> {
        fetch("https://s108.labagh.pl/memes",
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
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading ...</div>;
    } else {
        return (
            <ul>
                <h3>Udaje się pobrać dane !!! </h3>
                {items.map(item => (
                    <li key={item.id}>
                        {item.title} {item.description} {item.year}
                    </li>
                ))}
            </ul>
        )
    }
}

export default MyComponent;