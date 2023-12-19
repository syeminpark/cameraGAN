import { Camera } from 'expo-camera';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const __cameraPermission = async (setStartCamera) => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
        setStartCamera(true)
    } else {
        Alert.alert("Access denied")
    }
}

export const __albumPermisson = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status == 'granted') {
        return true
    } else {
        Alert.alert("Access denied")
        return false
    }
}