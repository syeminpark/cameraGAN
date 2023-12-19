import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native'
import { FontAwesome, Ionicons, } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera'

import GalleryView from './components/GalleryView';
import CameraView from './components/CameraView';
import HomeView from './components/HomeView';
import styles from './components/Styles';

const albumName = 'CameraGAN';

const App = () => {
  const [startCamera, setStartCamera] = useState(false)
  const [galleryImages, setGallery] = useState(null)
  const [startGallery, setStartGallery] = useState(null)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)

  const cameraRef = useRef(null);

  const __home = () => {
    setStartCamera(false)
    setCapturedImage(null)
    setPreviewVisible(false)
  }

  const __cameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      Alert.alert("Access denied")
    }
  }

  const __takePicture = async () => {
    if (!startCamera) return
    const photo = await cameraRef.current.takePictureAsync()
    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  const __savePhoto = async () => {
    if (!capturedImage) return
    if (!__albumPermisson()) return

    const asset = await MediaLibrary.createAssetAsync(capturedImage.uri);

    albumExist = await MediaLibrary.getAlbumAsync(albumName)
    if (!albumExist) MediaLibrary.createAlbumAsync(albumName, asset)
    MediaLibrary.addAssetsToAlbumAsync([asset], albumExist)
    __retakePicture()
  }

  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
  }

  return (
    <View style={styles.container}>
      {startCamera ? (
        <CameraView
          cameraRef={cameraRef}
          previewVisible={previewVisible}
          capturedImage={capturedImage}
          takePicture={__takePicture}
          home={__home}
          retakePicture={__retakePicture}
          savePhoto={__savePhoto}
        />
      ) : startGallery ? (
        < GalleryView galleryImages={galleryImages} />
      ) : (
        <HomeView addPhoto={__addPhoto}
          albumPermission={__albumPermisson}
          cameraPermission={__cameraPermission}
          openGallery={__openGallery}
        />
      )}
    </View>
  );
};




export default App