import {
    Button,
    Image,
    Keyboard,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import React, { Component } from 'react';
import { customNavigationStyle, styles } from './vocabularyStyle';

class Vocabulary extends Component {
    static navigatorStyle = customNavigationStyle;

    constructor(props) {
        super(props);
        this.state = {
            keyboardHidden: true,
            transitioning: false,
            word: ''
        };
    }

    componentWillMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
    }

    _transitionScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('Result', this.state.word);
    }

    _setTransition = (bool) => {
        this.setState({ transitioning: bool });
    }

    _keyboardWillShow = () => {
        this.setState({ keyboardHidden: false });
    }

    _keyboardWillHide = () => {
        this.setState({ keyboardHidden: true });
        if (this.state.transitioning) {
            this._transitionScreen();
        }
    }

    _onPress = () => {
        if (!this.state.transitioning) {
            this._setTransition(true);

            if (!this.state.keyboardHidden) {
                Keyboard.dismiss();
                return;
            }
            this._transitionScreen();
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.pageContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter word to define here'
                        onChangeText={(text) => this.setState({ word: text })}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    <View style={styles.searchBtn}>
                        <Button
                            title='Search'
                            onPress={this._onPress}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

module.exports = Vocabulary;