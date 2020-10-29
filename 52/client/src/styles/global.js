import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    titleHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    container: {
        flex: 1,
        // padding: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16
    },
    overview: {
        height: 144,
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row'
    }
});