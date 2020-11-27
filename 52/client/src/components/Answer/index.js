import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { answerOrder } from '../../const/converter';
import styles from './styles';

export default class Answer extends Component {
    render() {
        const { order, answer } = this.props;
        let convertedOrder = answerOrder[order];
        return (
            <View
                style={styles.layout}
            >
                <Text>{convertedOrder}. {answer}</Text>
            </View>
        )
    };
};