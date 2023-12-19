
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    homeContainer: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
    },
    icon: {
        color: 'black',
        fontSize: 60,
    },
    buttonText: {
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    scrollContainer: {
        flex: 1,
        marginTop: 50,
        width: "100%",
        height: "100%",
        pointerEvents: 'box-none',
    },
    heading: {
        color: "green",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    imageContainer: {
        flex: 1,
        margin: 1,
        aspectRatio: 1,
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {},
});

export default styles