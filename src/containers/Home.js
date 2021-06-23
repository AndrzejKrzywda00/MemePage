const Home =()=> {

    const handleClick =()=> {
        console.log('hello this worked');
    }

    return(
        <div className="home">
            <h2>Strona startowa(domowa)</h2>
            <button onClick={handleClick}>Click me!!!</button>
        </div>
    );
}

export default Home;