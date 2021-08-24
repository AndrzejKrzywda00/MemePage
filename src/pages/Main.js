import React from "react";
import "../styles/Main.css"

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem('nick')
        }
    }

    render() {
        if(localStorage.getItem('logged') !== "true") {
            return (
                <div id={"main-content"}>
                    <div>
                        <h1> Witaj na stronie z memami. Tutaj znajdziesz wyjaśnienia niemal każdego wątku z kultury internetowej.😀</h1>
                    </div>
                    <div id={'add-info'}>
                        <h4>W sekcji Wszystkie memy znajdziesz listę wszystkich wątków dodanych na stronie.
                            Po wejściu w którykolwiek z nich możesz obejrzeć zawartość.
                            Edycja, dodawanie i komentowanie przeznaczone są dla zalogowanych użytkowników.</h4>
                    </div>
                </div>
            );
        }
        return (
            <div id={"main-content"}>
                <div id={'welcome-text'}>
                    <h1>Witaj na stronie {this.state.name}!</h1>
                </div>
                <div>
                    <h1>Tutaj znajdziesz wyjaśnienia niemal każdego wątku z kultury internetowej.😀</h1>
                </div>
            </div>
        );
    }
}

export default Main;