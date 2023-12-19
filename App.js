import React, { useState, useRef } from 'react';
import { Button, FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import { FontAwesome, Ionicons, } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera'
import { StatusBar } from "expo-status-bar";

import GalleryView from './components/GalleryView';
import CameraView from './components/CameraView';
import HomeView from './components/HomeView';
import styles from './components/Styles';

import { __takePicture, __savePhoto, __retakePicture } from './components/cameraFunctions';
import { __addPhotoToAlbum, __fetchMedia, __renderItem } from './components/galleryFunctions';
import { __cameraPermission, __albumPermisson } from './components/permissionFunctions';

import { Image } from "expo-image";

const albumName = 'CameraGAN';

const App = () => {
  const [startCamera, setStartCamera] = useState(false)
  const [galleryImages, setGalleryImages] = useState([])
  const [startGallery, setStartGallery] = useState(null)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)

  const cameraRef = useRef(null);

  //galleryFiles: Holds an array of media files from the device
  //currentImage: Keeps track of the currently selected image 
  const [currentGalleryImage, setCurrentGalleryImage] = useState("");

  const __home = () => {
    setStartCamera(false)
    setCapturedImage(null)
    setPreviewVisible(false)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {startCamera ? (
        <CameraView
          cameraRef={cameraRef}
          previewVisible={previewVisible}
          capturedImage={capturedImage}
          takePicture={() => __takePicture(startCamera, cameraRef, setPreviewVisible, setCapturedImage)}
          home={__home}
          retakePicture={() => __retakePicture(setPreviewVisible, setCapturedImage)}
          savePhoto={() => __savePhoto(capturedImage, __albumPermisson, __retakePicture, albumName)}
        />
      ) : startGallery ? (
        < GalleryView
          albumName={albumName}
          renderItem={__renderItem}
          fetchMedia={() => __fetchMedia(albumName, setGalleryImages, setStartGallery)}
          setCurrentGalleryImage={setCurrentGalleryImage}
          currentGalleryImage={currentGalleryImage}
          galleryImages={galleryImages}
          setGalleryImages={setGalleryImages}
          setStartGallery={setStartGallery}
        />
      ) : (
        <HomeView addPhotoToAlbum={__addPhotoToAlbum}
          albumPermission={__albumPermisson}
          cameraPermission={() => __cameraPermission(setStartCamera)}
          fetchMedia={() => __fetchMedia(albumName, setGalleryImages, setStartGallery)}
        />
      )}
    </View>
  );
};

export default App