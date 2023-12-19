
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
});

export default styles