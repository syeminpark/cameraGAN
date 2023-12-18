import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera'
let camera = Camera


export default function App() {

  print('hi', ImagePicker)
  const [startCamera, setStartCamera] = React.useState(false)
  const [startAlbum, setStartAlbum] = React.useState(false)
  const [previewVisible, setPreviewVisible] = React.useState(false)
  const [capturedImage, setCapturedImage] = React.useState(null)

  const __home = async () => {
    setStartCamera(false)
    setCapturedImage(null)
    setPreviewVisible(false)
  }
  4
  const __cameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      Alert.alert("Access denied")
    }
  }
  const __albumPermisson = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status == 'granted') {
      setStartAlbum(true)
      return true
    } else {
      Alert.alert("Access denied")
      return false
    }
  }
  const __openAlbum = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,

    });
  }

  const __takePicture = async () => {
    if (!startCamera) return
    const photo = await camera.takePictureAsync()
    setPreviewVisible(true)

    setCapturedImage(photo)
  }

  const __savePhoto = async () => {
    if (!capturedImage) return
    if (!__albumPermisson()) return
    const asset = await MediaLibrary.createAssetAsync(capturedImage.uri);
    const albumName = 'CameraGAN'
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

      {
        startCamera ? (
          <View
            style={{
              flex: 1,
              width: '100%',
            }}
          >
            {previewVisible && capturedImage ? (
              <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
            ) : (
              <Camera
                style={{ flex: 1 }}
                ref={(r) => {
                  camera = r
                }}
              >
                <View
                  style={{

                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    padding: 20,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center'
                    }}
                  >
                    <TouchableOpacity
                      onPress={__takePicture}
                      style={{

                        width: 70,
                        height: 70,
                        borderRadius: 50,
                        backgroundColor: '#fff'
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    pointerEvents: 'box-none',
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    padding: 0,
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Ionicons
                    style={{
                      color: "white", fontSize: 80, backgroundColor: 'transparent',
                    }}
                    onPress={__home}
                    name="close-outline"

                  />
                  <Ionicons
                    style={{

                      color: "white", fontSize: 80, backgroundColor: 'transparent',
                    }}
                    onPress={__home}
                    name="close-outline"

                  />

                </View>

              </Camera>
            )}</View>


        ) : (
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              flexDirection: 'row',
              width: '50%',
              justifyContent: "space-between",


            }}>
            <TouchableOpacity
              onPress={async () => {
                if (await __albumPermisson()) __openAlbum(0)
              }}
              style={{
              }}>
              <Ionicons
                name="images-outline"
                style={{ color: "black", fontSize: 60 }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  alignSelf: "center",
                }}>
                Album
              </Text>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={__cameraPermission}
              style={{

              }}>
              <FontAwesome
                name="camera"
                style={{ color: "black", fontSize: 60 }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: 'bold',
                }}>
                Camera
              </Text>
            </TouchableOpacity>
          </View>

        )
      }
      <StatusBar style="auto" />
    </View >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const CameraPreview = ({ photo, retakePicture, savePhoto }) => {
  return (
    <ImageBackground
      source={{ uri: photo && photo.uri }}
      style={{
        flex: 1
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 15,
          justifyContent: 'flex-end'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'

          }}
        >
          <TouchableOpacity
            onPress={retakePicture}
            style={{
              width: 130,
              height: 40,
              alignItems: 'center',
              borderRadius: 4
            }}
          >
            <Text
              style={{
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 20
              }}
            >
              Re-take
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={savePhoto}
            style={{
              width: 130,
              height: 40,
              alignItems: 'center',
              borderRadius: 4
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>

  )
}