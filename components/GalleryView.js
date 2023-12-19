import React from 'react';
import { Image } from "expo-image";
import styles from './Styles';
import { Button, FlatList, Modal, Pressable, Text, View, } from 'react-native'
import { FontAwesome, Ionicons, } from '@expo/vector-icons'

const GalleryView = ({ albumName, renderItem, fetchMedia, setCurrentGalleryImage, currentGalleryImage, galleryImages, setGalleryImages, setStartGallery, home }) => (
    <View style={styles.container}>

        <View style={{ position: 'absolute', top: 30, left: 10, flexDirection: 'row', flex: 1, padding: 0, justifyContent: "space-between", width: "100%" }}>
            <Ionicons style={{ color: "black", fontSize: 60, backgroundColor: 'transparent' }} onPress={home} name="close-outline" />

        </View>
        {/* view full image in modal */}
        <Modal visible={currentGalleryImage !== ""} transparent={false}>
            <View style={{ flex: 1, backgroundColor: 0 }}>
                <Pressable
                    style={{ position: "absolute", top: 40, zIndex: 1, flex: 1, alignSelf: "center" }}
                    title="Close"
                    onPress={() => setCurrentGalleryImage("")}
                >
                    <Text style={{ color: "black", fontSize: 20, padding: 10, backgroundColor: "white" }}>
                        Close
                    </Text>
                </Pressable>
                <Image source={{ uri: currentGalleryImage }} style={{ width: "100%", height: "100%" }} />
            </View>
        </Modal>
        <View style={styles.scrollContainer}>
            <Text style={{ fontSize: 20, marginBottom: 20, alignSelf: 'center', }}>My Gallery</Text>
            <FlatList
                data={galleryImages}
                renderItem={({ item }) => renderItem({ setCurrentGalleryImage, item })}
                keyExtractor={(item) => item.id}
                numColumns={3}
                onEndReached={() => {

                    fetchMedia(albumName, setGalleryImages, setStartGallery, galleryImages.length,);
                }}
                onLayout={() => {
                    fetchMedia(albumName, setGalleryImages, setStartGallery, galleryImages.length,);
                }}
            />
        </View>
    </View>
);

export default GalleryView;