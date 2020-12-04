import {
    Button,
    ScrollView,
    Text,
    TextInput,
    View
} from 'react-native';
import React, { Component } from 'react';
import { customNavigationStyle, styles } from './resultStyle';

import definitions from '../assets/definitions.json';

const REGEX = /<it>|<\/it>/g;


class ResultPage extends Component {
    static navigatorStyle = customNavigationStyle;

    constructor(props) {
        super(props);
        this.state = {
            text: 'Searching definition...',
            numOfDefinitions: ''
        };
        this._replaceTag = this._replaceTag.bind(this);
    }

    _replaceTag = (str) => {
        return str.replace(REGEX, '');
    }

    _getDefinition = async (word) => {
        try {
            return definitions[word].MEANINGS.SYNONYMS;
        }
        catch (error) {
            console.log("_getDefinition: Failed to retrieve definition");
            throw error;
        }
    }

    componentDidMount = async () => {
        try {
            let word = 'accumulator';
            var definition = await this._getDefinition(word.toUpperCase());
            console.log('huynvq::==============>definition', definition);
            this._displayDefinition(definition);
        }
        catch (error) {
            console.log(error);
            this.setState({ text: 'Failed to find definition.' });
        }
    }

    _displayDefinition = (definition) => {
        var display = '';
        var i;

        // for (i = 0; i < definition.length; i++) {
        //     display = display + (i + 1) + '.' + definition[i] + '\n\n\n';
        // }
        display = display.replace(/:/g, ' ');
        this.setState({
            numOfDefinitions: '2 definitions were found:',
            text: `"Noun",
            "(computer science) a register that has a built-in adder that adds an input number to the contents of the register"\nStorage battery\nAccumulator register\nCollector`
        });
    }

    render() {
        return (
            <View style={styles.resultPageStyle}>
                <Text
                    style={styles.wordStyle}
                    numberOfLines={1}
                >
                    {this.props.word}
                </Text>
                <Text style={styles.definitionCountStyle}>
                    {this.state.numOfDefinitions}
                </Text>
                <ScrollView
                    style={styles.definitionBoxStyle}
                    showsVerticalScrollIndicator={true}
                >
                    <Text style={styles.definitionTextStyle}>
                        {this.state.text}
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

export default ResultPage;