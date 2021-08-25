import React, {Component} from 'react';
import "../styles/MemeView.css";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: 'meme_page_logo.png',
        thumbnail: 'meme_thumbnail.png'
    }
];

class Gallery extends Component {

    constructor(props) {
        super(props);


    }

    render () {
        return (
            <div id={'gallery'}>
                <ImageGallery items={images}/>
            </div>
        );
    }

}

export default Gallery;