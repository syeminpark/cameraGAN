import React from 'react';
import { Image } from "expo-image";
import styles from './Styles';
import { Button, FlatList, Modal, Pressable, Text, View, } from 'react-native'

const GalleryView = ({ albumName, renderItem, fetchMedia, setCurrentGalleryImage, currentGalleryImage, galleryImages, setGalleryImages, setStartGallery }) => (
    <View style={styles.container}>

        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", padding: 10 }}>
            {/* <Button
                title="Images"
                onPress={() => {
                    fetchMedia(0, "image");
                }}
            /> */}
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