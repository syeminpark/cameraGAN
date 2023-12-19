import * as MediaLibrary from 'expo-media-library';

export const __takePicture = async (startCamera, cameraRef, setPreviewVisible, setCapturedImage) => {
    if (!startCamera) return
    const photo = await cameraRef.current.takePictureAsync()
    setPreviewVisible(true)
    setCapturedImage(photo)
}

export const __retakePicture = (setPreviewVisible, setCapturedImage) => {
    setCapturedImage(null)
    setPreviewVisible(false)
}

export const __savePhoto = async (capturedImage, __albumPermisson, __retakePicture, albumName) => {
    if (!capturedImage) return
    if (!__albumPermisson()) return

    const asset = await MediaLibrary.createAssetAsync(capturedImage.uri);

    albumExist = await MediaLibrary.getAlbumAsync(albumName)
    if (!albumExist) MediaLibrary.createAlbumAsync(albumName, asset)
    MediaLibrary.addAssetsToAlbumAsync([asset], albumExist)

}

