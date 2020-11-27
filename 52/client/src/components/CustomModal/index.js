import React, { Component } from 'react';

import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';

// import {  } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'transparent',
    },
    modalView: {
        margin: 20,
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
        elevation: 5,
        width: 184,
        height: 128,
        backgroundColor: 'white'
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 8,
        padding: 10,
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
})
export default class CustomModal extends Component {
    render() {
        const { visible, modalText, onHide } = this.props;
        return (
            <Modal visible={visible} transparent>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{modalText}</Text>
                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={onHide}
                        >
                            <Text style={styles.textStyle}>Hide</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        )
    }
}