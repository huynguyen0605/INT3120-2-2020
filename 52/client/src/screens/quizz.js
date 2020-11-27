import { FlatList, Image, Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

import Answer from '../components/Answer';
import CustomIndicator from '../components/CustomIndicator';
import SvgManager from '../assets/SvgManager';
import SvgUri from 'react-native-svg-uri';
import { globalStyles } from '../styles/global';
import testService from '../services/testService';

import CustomModal from '../components/CustomModal';

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
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 32,
        left: 4,
        height: 64,
        width: '100%'
    },
    btn: {
        width: 68,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
});
export default class Quizz extends Component {
    state = {
        quizzs: [],
        currentQuizzIndex: null,
        visibleModal: false,
        currentCorrectAnswer: null,
        selectedAnswer: null
    };
    componentDidMount() {
        this.getQuizzs();
    };
    getQuizzs = () => {
        const test = this.props.navigation.state.params;
        const { id: testId } = test;
        testService.getQuizz(testId).then(quizzs => {
            this.setState({
                quizzs: quizzs,
                currentQuizzIndex: 0
            })
        }).catch(error => {

        });
    };
    submitQuizz = (quizzId, answer) => {
        let correctAnswer = answer;
        this.setState({
            selectedAnswer: answer
        })
        testService.submitQuizz(quizzId, answer).then(data => {
            console.log('huynvq::==============>data', data);
            if (data.errcode) {
                correctAnswer = data.data.correctAnswer;
            };
            this.setState({
                currentCorrectAnswer: correctAnswer
            })
        }).catch(error => {
            console.log('huynvq::===============>error', error);
        });
    };
    showFinish = () => {

    };
    resetAnswer = () => {
        this.setState({
            currentCorrectAnswer: null,
            selectedAnswer: null
        })
    };
    nextQuizz = () => {
        const { quizzs, currentQuizzIndex, navigation } = this.state;
        this.resetAnswer();
        if (currentQuizzIndex < quizzs.length) {
            this.setState({
                currentQuizzIndex: currentQuizzIndex + 1
            })
        } else {
            navigation.navigate('Home', {});
        };
    };
    prevQuizz = () => {
        const { navigation } = this.props;
        // const {  } = this.state;
        const { currentQuizzIndex } = this.state;
        this.resetAnswer();
        if (currentQuizzIndex > 0) {
            this.setState({
                currentQuizzIndex: currentQuizzIndex - 1
            })
        } else {
            navigation.navigate('Home', {});
        }
    };
    showHint = () => {
        this.setState({
            visibleModal: true
        });
    };
    hideHint = () => {
        this.setState({
            visibleModal: false
        });
    };
    render() {
        const { quizzs, currentQuizzIndex, visibleModal, currentCorrectAnswer, selectedAnswer } = this.state,
            currentQuizz = quizzs[currentQuizzIndex];
        let { title, answers, hint, id: quizzId } = currentQuizz ? currentQuizz : {};
        hint = hint ? hint : ``;
        if (!currentQuizz) return <CustomIndicator />;
        return (
            <View style={globalStyles.container}>
                <CustomModal
                    modalText={hint}
                    visible={visibleModal}
                    onHide={this.hideHint}
                />
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        {`${currentQuizzIndex + 1}. ${title}`}
                    </Text>
                </View>
                <View style={styles.answerContainer}>
                    <FlatList
                        data={answers}
                        renderItem={({ item, index }) => {
                            return (<Answer
                                key={index}
                                order={index}
                                answer={item}
                                quizzId={quizzId}
                                submitQuizz={this.submitQuizz}
                                currentCorrectAnswer={currentCorrectAnswer}
                                selectedAnswer={selectedAnswer}
                            />)
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={this.prevQuizz}>
                        <View style={{ ...styles.btn, backgroundColor: '#DC3545' }}>
                            <Text>{`< Back`}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.showHint}>
                        <SvgUri
                            width='32'
                            height='32'
                            svgXmlData={SvgManager.lightbulb}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.nextQuizz}>
                        <View style={{ ...styles.btn, backgroundColor: '#18A0FB' }}>
                            <Text>{`Next >`}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};