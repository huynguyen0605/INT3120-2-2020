import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { answerOrder } from '../../const/converter';
import styles from './styles';

export default class Answer extends Component {
    render() {
        const { order, answer, submitQuizz, quizzId, currentCorrectAnswer, selectedAnswer } = this.props;
        let convertedOrder = answerOrder[order];
        let textStyle = { color: 'black' };
        if (currentCorrectAnswer === order) textStyle = { color: '#32CD32' };
        if (selectedAnswer === order && currentCorrectAnswer !== selectedAnswer) textStyle = { color: '#DC3545' }
        return (
            <TouchableOpacity
                style={styles.layout}
                onPress={!selectedAnswer ? () => submitQuizz(quizzId, order) : () => { }}
            >
                <Text style={{ ...textStyle }}>{convertedOrder}. {answer}</Text>
            </TouchableOpacity>
        )
    };
};