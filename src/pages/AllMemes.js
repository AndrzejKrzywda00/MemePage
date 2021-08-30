import React from "react";
import '../styles/AllMemes.css';
import {withRouter} from "react-router-dom";
import Posts from "../containers/Posts";
import Pagination from "../meta/Pagination";

class AllMemes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
            currentPage: 1,
            postsPerPage: 10
        }
        this.getCurrentPosts = this.getCurrentPosts.bind(this);
        this.handleClickMeme = this.handleClickMeme.bind(this);
        this.getTotalPosts = this.getTotalPosts.bind(this);
        this.paginate = this.paginate.bind(this);
    }

    async componentDidMount() {

        await fetch('https://s401454.labagh.pl/memes/',
            {
                Method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                }),
            })
            .then(response => response.json())
            .then(data => {
                this.setState({isLoaded: true});
                this.setState({data: data});
            });
    }

    handleClickMeme =(event)=> {
        let memeId = event.target.getAttribute("meme_id");
        localStorage.setItem('meme_id',memeId);
        this.props.history.push("/single-meme");
    }

    getCurrentPosts() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        return this.state.data.slice(indexOfFirstPost,indexOfLastPost);
    }

    getTotalPosts() {
        return this.state.data.length;
    }

    paginate (number) {
        this.setState({currentPage: number});
    }

    render() {
        const {isLoaded} = this.state;
        return (
                isLoaded ?
                    <div id={"all-memes"}>
                        <h1>Wszystkie memy</h1>
                        <Posts
                            posts={this.getCurrentPosts()}
                            handleClickMeme={this.handleClickMeme}
                            loading={!isLoaded}
                        />

                        <Pagination
                            postsPerPage={this.state.postsPerPage}
                            totalPosts={this.getTotalPosts()}
                            paginate={this.paginate}
                        />
                    </div>
                    :
                    <p>Loading ...</p>
        );
    }
}

export default withRouter(AllMemes);