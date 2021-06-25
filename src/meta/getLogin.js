import React, {useEffect, useState} from "react";

function getLogin(user) {

    const [error, setError] = useState(0);
    const [isVerified, setIsVerified] = useState(false);

    useEffect(()=> {
        fetch("https://s108.labagh.pl/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsVerified(result);
                },
                (error) => {
                    setError(error);
                }
            )
    },[]);

    if(error) {
        return <div>Error: {error.message}</div>
    }
    else if(!isVerified) {
        return <div>Błędne hasło bądź login</div>
    }
    else {
        return <div>Udało się zalogować</div>
    }

}

export default getLogin;