
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import styles from './Styles';
import { Pressable, View, } from 'react-native'
import { Image } from "expo-image";

export const __addPhotoToAlbum = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
    });
}

export const __fetchMedia = async (albumName, setGalleryImages, setStartGallery, first = 0) => {

    const albumID = await MediaLibrary.getAlbumAsync(albumName)
    const media = await MediaLibrary.getAssetsAsync({
        album: albumID,
        sortBy: ['creationTime'],
        mediaType: ['photo'],
        first: first + 30,
    })
    //const uris = photos.assets.map(asset => asset.uri);
    setGalleryImages(media.assets)
    setStartGallery(true)
}

//displays a pressable Image component for each media item
export const __renderItem = ({ setCurrentGalleryImage, item }) => (
    <View style={styles.imageContainer}>
        <Pressable
            onPress={() => {
                setCurrentGalleryImage(item.uri);
            }}
        >
            <Image
                source={{ uri: item.uri }}
                style={{ width: "100%", height: "100%" }}
            />
        </Pressable>
    </View>
);