import { FlatList, Image, Modal, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

import Answer from '../components/Answer';
import CustomIndicator from '../components/CustomIndicator';
import SvgManager from '../assets/SvgManager';
import SvgUri from 'react-native-svg-uri';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';
import testService from '../services/testService';

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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default class Quizz extends Component {
    state = {
        quizzs: [],
        currentQuizzIndex: null
    };
    componentDidMount() {
        this.getQuizzs();
    };
    getQuizzs() {
        const test = this.props.navigation.state.params;
        const { id: testId } = test;
        testService.getQuizz(testId).then(quizzs => {
            this.setState({
                quizzs: quizzs,
                currentQuizzIndex: 0
            })
        });
    };
    showFinish() {

    };
    nextQuizz = () => {
        const { quizzs } = this.state;
        if (currentQuizzIndex < quizzs.length) {
            this.setState({
                currentQuizzIndex: currentQuizzIndex + 1
            })
        } else {
            this.showFinish();
        };
    };
    prevQuizz = () => {
        const { navigation } = this.props;
        // const {  } = this.state;
        const { currentQuizzIndex } = this.state;
        if (currentQuizzIndex > 0) {
            this.setState({
                currentQuizzIndex: currentQuizzIndex - 1
            })
        } else {
            navigation.navigate('Home', {});
        }
    };
    render() {
        const { quizzs, currentQuizzIndex } = this.state,
            currentQuizz = quizzs[currentQuizzIndex];
        let { title, answers } = currentQuizz ? currentQuizz : {};
        if (!currentQuizz) return <CustomIndicator />;
        return (
            <View style={globalStyles.container}>
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
                <Modal isVisible={true}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>

                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            // onPress={() => {
                            //     setModalVisible(!modalVisible);
                            // }}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    };
};