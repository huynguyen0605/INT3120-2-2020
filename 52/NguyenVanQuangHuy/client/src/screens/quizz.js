import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import dummy from '../const/dummy';

import Answer from '../components/Answer';

const styles = StyleSheet.create({
    quizzContainer: {
        ...globalStyles.container,
        backgroundColor: '#C4C4C4',
        paddingHorizontal: 8,
        paddingBottom: 16
    },
    questionContainer: {
        backgroundColor: '#71C7E6',
        paddingHorizontal: 64,
        paddingVertical: 32
    },
    questionText: {
        ...globalStyles.text,
        color: '#FFFFFF'
    },
    answerContainer: {
        backgroundColor: '#FFFFFF',
    }
});
export default class Quizz extends Component {
    componentDidMount() {
        console.log(this.props.navigation.state.params);
    };
    render() {
        return (
            <View style={globalStyles.container}>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        1. Listen or read this and answer the question
                    </Text>
                </View>
                <View style={styles.answerContainer}>
                    <FlatList
                        data={dummy.answers}
                        renderItem={({ item, index }) => (
                            <Answer
                                key={index}
                                order={index}
                                title={item.title}
                                content={item.content}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        );
    };
};