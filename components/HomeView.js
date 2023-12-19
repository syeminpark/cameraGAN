import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native'
import { FontAwesome, Ionicons, } from '@expo/vector-icons'
import styles from './Styles';

const HomeView = ({ addPhoto, albumPermission, cameraPermission, openGallery }) => (
    <View style={styles.homeContainer}>
        <TouchableOpacity onPress={async () => { if (await albumPermission()) addPhoto() }} style={styles.button}>
            <Ionicons name="folder-outline" style={styles.icon} />
            <Text style={styles.buttonText}>Add Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cameraPermission} style={styles.button}>
            <FontAwesome name="camera" style={styles.icon} />
            <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={async () => await albumPermission() && openGallery()} style={styles.button}>
            <Ionicons name="images-outline" style={styles.icon} />
            <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>
    </View>
);

export default HomeView;