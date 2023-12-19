import React from 'react';
import {
    Image
} from 'react-native';

const GalleryView = ({
    galleryImages
}) => ( <
    Image source = {
        {
            uri: galleryImages[0],
            static: true,
        }
    }
    style = {
        {
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
        }
    }
    />
);

export default GalleryView;