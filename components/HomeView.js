import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native'
import { FontAwesome, Ionicons, } from '@expo/vector-icons'
import styles from './Styles';

const HomeView = ({ addPhotoToAlbum, albumPermission, cameraPermission, fetchMedia }) => (
    <View style={styles.homeContainer}>
        <TouchableOpacity onPress={async () => { if (await albumPermission()) addPhotoToAlbum() }} style={styles.button}>
            <Ionicons name="folder-outline" style={styles.icon} />
            <Text style={styles.buttonText}>Add Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cameraPermission} style={styles.button}>
            <FontAwesome name="camera" style={styles.icon} />
            <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={async () => { if (await albumPermission()) fetchMedia() }} style={styles.button}>
            <Ionicons name="images-outline" style={styles.icon} />
            <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>
    </View>
);

export default HomeView;