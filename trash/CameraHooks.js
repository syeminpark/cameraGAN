// CameraHooks.js
import { useState, useRef } from 'react';
import * as MediaLibrary from 'expo-media-library';

const CameraHooks = () => {
    const [startCamera, setStartCamera] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const cameraRef = useRef(null);

    const takePicture = async () => {
        if (!startCamera) return;
        const photo = await cameraRef.current.takePictureAsync();
        setPreviewVisible(true);
        setCapturedImage(photo);
    };

    const retakePicture = () => {
        setCapturedImage(null);
        setPreviewVisible(false);
    };

    const savePhoto = async () => {
        if (!capturedImage) return
        if (!__albumPermisson()) return

        const asset = await MediaLibrary.createAssetAsync(capturedImage.uri);

        albumExist = await MediaLibrary.getAlbumAsync(albumName)
        if (!albumExist) MediaLibrary.createAlbumAsync(albumName, asset)
        MediaLibrary.addAssetsToAlbumAsync([asset], albumExist)
        __retakePicture()
    }

    return {
        startCamera,
        previewVisible,
        capturedImage,
        cameraRef,
        setStartCamera,
        takePicture,
        retakePicture,
        savePhoto,
    };
};

export default CameraHooks