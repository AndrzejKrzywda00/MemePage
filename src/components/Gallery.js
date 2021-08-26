import React, {Component} from 'react';
import "../styles/MemeView.css";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: 'https://www.youtube.com/watch?v=aMMIIpbPfPk&ab_channel=KAISERVS',
    }
];

class Gallery extends Component {

    render () {
        return (
            <div id={'gallery'}>
                <ImageGallery items={images}/>
            </div>
        );
    }

}

export default Gallery;