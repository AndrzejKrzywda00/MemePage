import React, {useEffect, useState} from "react";

function PostRegister({user}) {

    const [error, setError] = useState(0);

    useEffect( ()=> {
        fetch("https://s108.labagh.pl/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nick: user.nick,
                email: user.email,
                password: user.password
            })
        })
            .then(res => res.json())
            .then(
                (error) => {
                    setError(error);
                }
            )
    }, []);

    if(error) {
        return <div><p>Nie udało się dodać użytkownika :(</p></div>
    }
    else {
        return <div><p>Pomyślnie dodano użytkownika</p></div>
    }
}

export default PostRegister;