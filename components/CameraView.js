
import ShotView from './ShotView';
import { View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import { FontAwesome, Ionicons, } from '@expo/vector-icons'

const CameraView = ({
  cameraRef,
  previewVisible,
  capturedImage,
  takePicture,
  home,
  retakePicture,
  savePhoto,
}) => (
  <View style={{ flex: 1, width: '100%' }}>
    {previewVisible && capturedImage ? (
      <ShotView photo={capturedImage} savePhoto={savePhoto} retakePicture={retakePicture} />
    ) : (
      <Camera
        style={{ flex: 1 }}
        ref={cameraRef}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', flex: 1, padding: 20 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={takePicture} style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: '#fff' }} />
            </View>
          </View>
          <View style={{ pointerEvents: 'box-none', position: 'absolute', bottom: 0, flexDirection: 'row', flex: 1, padding: 0, justifyContent: "space-between", width: "100%" }}>
            <Ionicons style={{ color: "white", fontSize: 80, backgroundColor: 'transparent' }} onPress={home} name="close-outline" />
            <Ionicons style={{ color: "white", fontSize: 80, backgroundColor: 'transparent' }} onPress={home} name="close-outline" />
          </View>
        </View>
      </Camera>
    )}
  </View>
);

export default CameraView