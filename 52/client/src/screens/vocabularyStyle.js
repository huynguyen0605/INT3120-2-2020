import {
    Dimensions,
    StyleSheet
} from 'react-native';

var { width, height } = Dimensions.get('screen');
var textMargin = height / 10;
var textInputWidth = width - (width / 4);

const customNavigationStyle = {
    drawUnderNavBar: true,
    navBarHidden: true,
    navBarNoBorder: true,
    drawUnderTabBar: true
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#000033',
        flexDirection: 'column',
        
    },
    textStyle: {
        marginTop: textMargin
    },
    textInput: {
        height: 40,
        backgroundColor: 'azure',
        fontSize: 20,
        width:'96%',
        marginLeft:'2%',
        borderRadius:10,
        marginTop:'2%'
    },
    searchBtn: {
        marginTop: 10,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
        overflow: 'hidden',
        marginLeft:'2%'
    }
});
module.exports = { styles, customNavigationStyle };