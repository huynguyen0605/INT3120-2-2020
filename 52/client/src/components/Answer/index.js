import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Answer extends Component {
    render() {
        return (
            <View
                style={styles.layout}
            >
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
            </View>
        )
    };
};