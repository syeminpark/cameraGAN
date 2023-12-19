import {
    Camera
} from 'expo-camera'
import * as ImagePicker from 'expo-image-picker';

const CameraPermissionHooks = async () => {
    const {
        status
    } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
        setStartCamera(true)
    } else {
        Alert.alert("Access denied")
    }
}
const AlbumPermissonHooks = async () => {
    const {
        status
    } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status == 'granted') {
        return true
    } else {
        Alert.alert("Access denied")
        return false
    }
}

export {
    CameraPermissionHooks,
    AlbumPermissonHooks
}