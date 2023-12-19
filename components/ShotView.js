import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native'
const ShotView = ({ photo, retakePicture, savePhoto }) => (
  <ImageBackground source={{ uri: photo?.uri }} style={{ flex: 1, padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
    <TouchableOpacity onPress={retakePicture} style={{ width: 130, height: 40, alignItems: 'center', borderRadius: 4 }}>
      <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 20 }}>Re-take</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={async () => await savePhoto().then(retakePicture())} style={{ width: 130, height: 40, alignItems: 'center', borderRadius: 4 }}>
      <Text style={{ color: '#fff', fontSize: 20 }}>Save</Text>
    </TouchableOpacity>
  </ImageBackground>
);


export default ShotView